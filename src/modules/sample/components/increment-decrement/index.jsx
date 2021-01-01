import React from 'react';
import { Box, Button, Paper, Typography } from '@material-ui/core';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { FlexBox } from '#commons/components/flex-box';
import './store';
import styled from 'styled-components';
import { incrementDecrementKey } from './store/key';
import { doSpacing, fromPalette } from '#commons/styled-components-util';

const Content = styled((props) => <div {...props} />)`
  width: min-content;
  padding: ${doSpacing(2)};
  background: ${fromPalette('common.white')};
  border-radius: 15px;
`;

const IncrementDecrementComp = () => {
  const { count } = useStoreState((state) => state[incrementDecrementKey]);
  const { doIncrement, doDecrement } = useStoreActions(
    (actions) => actions[incrementDecrementKey]
  );

  return (
    <Content>
      <Typography variant="h3">{count}</Typography>
      <FlexBox row>
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
    </Content>
  );
};

export default IncrementDecrementComp;
