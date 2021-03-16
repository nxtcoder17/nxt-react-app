import { useState } from 'react';

export const ServiceState = {
  IDLE: 'IDLE',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  IN_PROGRESS: 'IN_PROGRESS',
};

export const useAsync = (fetcher) => {
  const [resp, setResp] = useState({
    response: null,
    error: null,
    status: ServiceState.IDLE,
  });

  return {
    ...resp,
    inProgress: resp.status === ServiceState.IN_PROGRESS,

    exec: (...args) => {
      (async () => {
        setResp({
          response: null,
          error: null,
          status: ServiceState.IN_PROGRESS,
        });
        try {
          const response = await fetcher(...args);
          setResp({
            response,
            error: null,
            status: ServiceState.SUCCESS,
          });
        } catch (err) {
          console.error(err);
          setResp({
            response: null,
            error: err,
            status: ServiceState.FAILED,
          });
        }
      })();
    },
    reset: () => {
      setResp({
        response: null,
        error: null,
        status: ServiceState.IDLE,
      });
    },
  };
};
