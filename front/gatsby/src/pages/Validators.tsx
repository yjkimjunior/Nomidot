// Copyright 2018-2020 @paritytech/Nomidot authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { useQuery } from '@apollo/react-hooks';
import { RouteComponentProps } from '@reach/router';
import { Spinner } from '@substrate/design-system';
import React, { useEffect, useState } from 'react';

import { LATEST_SESSION_QUERY } from '../util/graphql';
import { CurrentElectedList } from '../components/CurrentElected';

type Props = RouteComponentProps;

const Validators = (_props: Props): React.ReactElement => {
  
  const [sessionIndex, setSessionIndex] = useState<number>();

  useEffect(() => {
    const { data } = useQuery(LATEST_SESSION_QUERY, {
      pollInterval: 10000,
    });

    if (data) {
      const { sessions } = data;

      const index = sessions[0].index;

      setSessionIndex(index);
    }
  }, []);

  return (
    <>
      {sessionIndex ? (
        <CurrentElectedList sessionIndex={sessionIndex} />
      ) : (
        <Spinner inline />
      )}
    </>
  );
};

export default Validators;
