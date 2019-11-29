import { ApiPromise } from '@polkadot/api';
import {
  AccountId,
  Balance,
  BlockNumber,
  Hash,
  Moment,
  SessionIndex,
  ValidatorPrefs,
} from '@polkadot/types/interfaces';

export interface BlockData {
  [x: string]: any;
}

export interface PrismaEntry {
  table: PrismaTable;
  data: BlockData;
}

type PrismaTable =
  | 'blockNumber'
  | 'imOnline'
  | 'rewards'
  | 'slashing'
  | 'nominations'
  | 'stake'
  | 'validations'
  | 'sessions'
  | 'totalIssuance';

export interface Task<T> {
  read(blockNumber: BlockNumber, blockHash: Hash, api: ApiPromise): Promise<T>;
  write(value: T): Promise<void>;
}

export interface NomidotBlock {
  authoredBy: AccountId;
  blockNumber: BlockNumber;
  hash: Hash;
  startDateTime: Moment;
}

export interface NomidotHeartBeat {
  blockNumber: BlockNumber;
  isOnline: boolean;
  sender: AccountId;
  sessionId: SessionIndex;
}

export interface NomidotSession {
  idx: SessionIndex,
  start: BlockNumber,
  end: BlockNumber
}

export interface NomidotSlashing {
  blockNumber: BlockNumber,
  reason: string,
  amount: Balance,
}

export interface NomidotTotalIssuance {
  blockNumber: BlockNumber,
  amount: Balance
}

export interface NomidotValidator {
  blockNumber: BlockNumber,
  controller: AccountId,
  stash: AccountId,
  validatorPreferences: ValidatorPrefs
}

export type NomidotValidators = NomidotValidator[];

export type Nomidot = NomidotBlock | NomidotHeartBeat | NomidotSession | NomidotTotalIssuance | NomidotValidators;