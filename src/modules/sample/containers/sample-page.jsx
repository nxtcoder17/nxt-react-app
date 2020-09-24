import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { FlexBox } from '#commons/components/flex-box';
import storeConfig from '../store/store-config';

export const SamplePage = () => {
  const { count, data } = useStoreState((state) => state[storeConfig.key]);

  const { doIncrement, doDecrement, fetchData } = useStoreActions(
    (actions) => actions[storeConfig.key]
  );

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  return (
    <>
      {/* Increment Decrement: {{{  */}
      <Typography variant={'h5'}>
        Sample Module has been setup, Value: {count}
      </Typography>

      <FlexBox row align={'center'}>
        <Button
          onClick={() => doDecrement(5)}
          variant={'outlined'}
          color={'secondary'}
        >
          Big Decrease
        </Button>
        <Box mr={3} />

        <Button
          onClick={() => doDecrement()}
          variant={'contained'}
          color={'secondary'}
        >
          Decrease
        </Button>
        <Box mr={3} />
        <Button
          onClick={() => doIncrement()}
          variant={'contained'}
          color={'primary'}
        >
          Increase
        </Button>
        <Box mr={3} />
        <Button
          onClick={() => doIncrement(5)}
          variant={'outlined'}
          color={'primary'}
        >
          Big increase
        </Button>
      </FlexBox>
      {/* Increment Decrement: }}} */}

      {data == null && <Typography variant="h5">Data is null </Typography>}

      {data != null && data.name && (
        <Typography variant="h5">{data.name}</Typography>
      )}

      {data != null && data.email && (
        <Typography variant="h5">{data.email}</Typography>
      )}
    </>
  );
};
