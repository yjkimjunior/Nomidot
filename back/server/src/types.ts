// Copyright 2018-2020 @paritytech/nomidot authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Prisma } from './generated/prisma-client';
// import { PubSub } from 'graphql-yoga';

export interface Context {
  prisma: Prisma;
  // pubsub: PubSub;
}

export type Selectors = Record<string, any>;