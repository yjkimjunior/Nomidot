// Copyright 2018-2020 @paritytech/Nomidot authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';

// ******* QUERIES *******

export const LATEST_ERA_QUERY = gql`
  query {
    eras(last: 1) {
      index
      totalPoints
      individualPoints
    }
  }
`;

export const LATEST_SESSION_QUERY = gql`
  query {
    sessions(last: 1) {
      index
    }
  }
`;

// ******* SUBSCRIPTIONS *******

export const BLOCKS_SUBSCRIPTION = gql`
  subscription {
    subscribeBlockNumbers {
      authoredBy
      hash
      number
      startDateTime
    }
  }
`;

export const ERAS_SUBSCRIPTION = gql`
  subscription {
    subscribeEras {
      index
      individualPoints
      totalPoints
    }
  }
`;

export const SESSIONS_SUBSCRIPTION = gql`
  subscription {
    subscribeSessions {
      index
    }
  }
`;

export const STAKING_SUBSCRIPTION = gql`
  subscription {
    subscribeStakes {
      blockNumber {
        number
      }
      totalStake
    }
  }
`;
