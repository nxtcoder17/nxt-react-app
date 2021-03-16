import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { ServiceState, useAsync } from '~/commons/hooks/use-async';
import { authorizedAxios } from '~/commons/random-functions/authorized-axios';

const whoAmI = () => authorizedAxios.get('/auth/who-am-i');

export const useCheckAuth = () => {
  const { exec, error } = useAsync(whoAmI);
  const history = useHistory();

  useEffect(() => {
    if (error) {
      history.push('/auth/login');
    }
  }, [error]);

  useEffect(() => {
    exec();
  }, []);
};

export const useCheckNoAuth = () => {
  const { exec, status } = useAsync(whoAmI);
  const history = useHistory();

  useEffect(() => {
    if (status === ServiceState.SUCCESS) {
      history.push('/admission');
    }
  }, [status]);

  useEffect(() => {
    exec();
  }, []);
};
