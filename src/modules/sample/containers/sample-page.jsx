import React, { useEffect, useContext } from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { FlexBox } from '#commons/components/flex-box';
import storeCtx from '../store/context';

const SamplePage = () => {
  const { store: sampleStore } = useContext(storeCtx);
  const { count, data } = useStoreState(sampleStore);

  const { doIncrement, doDecrement, fetchData } = useStoreActions(sampleStore);

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  return (
    <>
      <Typography variant="h5">
        Sample Module has been setup, Value: {count}
      </Typography>

      <FlexBox row align="center">
        <Button
          onClick={() => doDecrement(5)}
          variant="outlined"
          color="secondary"
        >
          Big Decrease
        </Button>
        <Box mr={3} />

        <Button
          onClick={() => doDecrement()}
          variant="contained"
          color="secondary"
        >
          Decrease
        </Button>
        <Box mr={3} />
        <Button
          onClick={() => doIncrement()}
          variant="contained"
          color="primary"
        >
          Increase
        </Button>
        <Box mr={3} />
        <Button
          onClick={() => doIncrement(5)}
          variant="outlined"
          color="primary"
        >
          Big increase
        </Button>
      </FlexBox>

      {data == null && <Typography variant="h5">Data is null </Typography>}

      {data != null && data.name && (
        <Typography variant="h5">{data.name}</Typography>
      )}

      {data != null && data.email && (
        <Typography variant="h5">{data.email}</Typography>
      )}

      <Typography
        variant="h1"
        style={{ fontStyle: 'italic', fontFamily: 'Dancing Script' }}
      >
        WebApp is ready to Roll
      </Typography>
    </>
  );
};

export default SamplePage;
