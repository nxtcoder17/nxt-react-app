import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { FlexBox } from '#commons/components/flex-box';
import storeConfig from '../store/store-config';

export const SamplePage = () => {
  console.log('store key: ', storeConfig.key);
  const { count } = useStoreState((state) => state[storeConfig.key]);
  const { doIncrement, doDecrement } = useStoreActions(
    (actions) => actions[storeConfig.key]
  );

  return (
    <>
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
    </>
  );
};
