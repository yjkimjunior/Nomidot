// Copyright 2018-2020 @paritytech/nomidot authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromise } from '@polkadot/api';
import { Option } from '@polkadot/types';
import { BlockNumber, Hash, ReferendumInfo } from '@polkadot/types/interfaces';
import { logger } from '@polkadot/util';

import { prisma, Referendum as PrismaReferendum, Preimage } from '../generated/prisma-client';
import { filterEvents } from '../util/filterEvents';
import { getReferendumStatus } from '../util/getReferendumStatus';
import { preimageStatus, referendumStatus } from '../util/statuses';
import {
  Cached,
  NomidotReferendum,
  NomidotReferendumRawEvent,
  Task,
} from './types';

const l = logger('Task: Referenda');

/*
 *  ======= Table (Referendum) ======
 */
const createReferendum: Task<NomidotReferendum[]> = {
  name: 'createReferendum',
  read: async (
    blockHash: Hash,
    cached: Cached,
    api: ApiPromise
  ): Promise<NomidotReferendum[]> => {
    const { events } = cached;

    let referendumEvents = filterEvents(
      events,
      'democracy',
      referendumStatus.STARTED
    );

    const results: NomidotReferendum[] = [];

    await Promise.all(
      referendumEvents.map(async ({ event: { data, typeDef } }) => {
        let referendumRawEvent: NomidotReferendumRawEvent | null = data.reduce(
          (prev, curr, index) => {
            const type = typeDef[index].type;

            return {
              ...prev,
              [type]: curr.toJSON(),
            };
          },
          {}
        );
        // Returns { ReferendumIndex: '0', VoteThreshold: 'Supermajorityapproval' }

        if (
          !referendumRawEvent.ReferendumIndex &&
          referendumRawEvent.ReferendumIndex !== 0
        ) {
          l.error(
            `Expected ReferendumIndex missing in the event: ${referendumRawEvent.ReferendumIndex}`
          );
          return null;
        }
        if (!referendumRawEvent.VoteThreshold) {
          l.error(
            `Expected VoteThreshold is missing in the event: ${referendumRawEvent.VoteThreshold}`
          );
          return null;
        }

        let referendumInfoRaw: Option<ReferendumInfo> | null = await api.query.democracy.referendumInfoOf.at(
          blockHash,
          referendumRawEvent.ReferendumIndex
        );

        let referendumInfo = getReferendumStatus(referendumInfoRaw!);

        if (!referendumInfo) {
          l.error(
            `No ReferendumInfo found for ReferendumIndex: ${referendumRawEvent.ReferendumIndex}`
          );
          return null;
        }

        let result: NomidotReferendum | null = {
          delay: referendumInfo.delay,
          end: referendumInfo.end,
          preimageHash: referendumInfo.proposalHash,
          referendumIndex: referendumRawEvent.ReferendumIndex,
          status: referendumStatus.STARTED,
          voteThreshold: referendumRawEvent.VoteThreshold,
        };

        l.log(`Nomidot Referendum: ${JSON.stringify(result)}`);
        results.push(result);
        
        // explicitly clean references
        referendumInfo = null;
        referendumInfoRaw = null;
        result = null;
      })
    );

    return results;
  },
  write: async (blockNumber: BlockNumber, value: NomidotReferendum[]) => {
    if (!value) {
      return;
    }

    await Promise.all(
      value.map(async referendum => {
        const {
          delay,
          end,
          preimageHash,
          referendumIndex,
          status,
          voteThreshold,
        } = referendum;

        let preimages: Preimage[] | null = await prisma.preimages({
          where: {
            hash: preimageHash.toString(),
          },
        });

        // preimage aren't uniquely identified with their hash
        // however, there can only be one preimage with the status "Noted"
        // at a time
        let notedPreimage: Preimage | undefined | null = preimages.length
          ? preimages.filter(async preimage => {
              await prisma.preimageStatuses({
                where: {
                  AND: [
                    {
                      id: preimage.id,
                    },
                    {
                      status: preimageStatus.NOTED,
                    },
                  ],
                },
              });
            })[0]
          : undefined;

        await prisma.createReferendum({
          delay: delay.toNumber(),
          end: end.toNumber(),
          preimage: notedPreimage
            ? {
                connect: {
                  id: notedPreimage.id,
                },
              }
            : undefined,
          preimageHash: preimageHash.toString(),
          referendumId: referendumIndex,
          referendumStatus: {
            create: {
              blockNumber: {
                connect: {
                  number: blockNumber.toNumber(),
                },
              },
              status,
              uniqueStatus: `${referendumIndex}_${status}`,
            },
          },
          voteThreshold: voteThreshold.toString(),
        });
        
        // explicitly clean references
        notedPreimage = null;
        preimages = null;
      })
    );
  },
};

export default createReferendum;
