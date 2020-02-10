// Copyright 2018-2020 @paritytech/nomidot authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromise } from '@polkadot/api';
import { BlockNumber, Hash } from '@polkadot/types/interfaces';
import { logger } from '@polkadot/util';

import { prisma } from '../generated/prisma-client';
import { NomidotSession, Task } from './types';

const l = logger('Task: Session');

/*
 *  ======= Table (Session) ======
 */
const createSession: Task<NomidotSession> = {
  name: 'createSession',
  read: async (blockHash: Hash, api: ApiPromise): Promise<NomidotSession> => {
    const events = await api.query.system.events.at(blockHash);

    const didNewSessionStart =
      events.filter(
        ({ event: { method, section } }) =>
          section === 'session' && method === 'NewSession'
      ).length > 0;

    const sessionIndex = await api.query.session.currentIndex.at(blockHash);

    const result = {
      didNewSessionStart,
      idx: sessionIndex,
    };

    // l.log(`Nomidot Session: ${JSON.stringify(result)}`);

    return result;
  },
  write: async (blockNumber: BlockNumber, value: NomidotSession) => {
    const { didNewSessionStart, idx } = value;

    if (didNewSessionStart) {
      await prisma.createSession({
        index: idx.toNumber(),
        start: {
          connect: {
            number: blockNumber.toNumber(),
          },
        },
      });
    }
  },
};

export default createSession;
