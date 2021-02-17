import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useStoreActions, useStoreState } from 'easy-peasy';
import './store';
import styled from 'styled-components';
import { incrementDecrementKey } from './store/key';
import { doSpacing, fromPalette } from '~/commons/styled-components-util';
import { MediaQuery } from '~/commons/media-query';

const Buttons = styled.div`
  display: grid;

  ${MediaQuery.md} {
    grid-auto-flow: column;
  }
`;

const Content = styled((props) => <div {...props} />)`
  display: grid;
  background: blue;
  padding: ${doSpacing(2)} ${doSpacing(4)};
  background: ${fromPalette('common.white')};
  border-radius: 15px;

  ${MediaQuery.md} {
    width: min-content;
    justify-content: center;
    border: 2px solid rebeccapurple;
  }

  h3 {
    text-align: center;
  }

  button {
    white-space: nowrap;

    :hover {
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
    }
  }

  ${MediaQuery.md} {
    background: green;
  }
`;

const Label = styled(({ children, ...props }) => (
  <div {...props}>
    <span>{children}</span>
  </div>
))`
  background: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  display: flex;
  font-size: clamp(16px, 2rem, 4rem);
  font-family: 'Dancing Script', sans-serif;
  text-align: left;
  align-items: center;
`;

const Wrapper = styled.div`
  display: grid;
  ${Content} {
    grid-row: 2;
  }

  ${Label} {
    grid-row: 1;
  }

  ${MediaQuery.md} {
    grid-template-columns: auto 1fr;
    grid-column-gap: ${doSpacing(8)};
    place-items: center;
  }
`;

const IncrementDecrementComp = () => {
  const { count } = useStoreState((state) => state[incrementDecrementKey]);
  const { doIncrement, doDecrement } = useStoreActions(
    (actions) => actions[incrementDecrementKey]
  );

  return (
    <Wrapper>
      <Content>
        <Typography variant="h3">{count}</Typography>
        <Buttons>
          <Button
            onClick={() => doDecrement(5)}
            variant="contained"
            color="primary"
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
            variant="contained"
            color="primary"
          >
            Big increase
          </Button>
        </Buttons>
      </Content>
      <Label>Easy Peasy Redux Store</Label>
    </Wrapper>
  );
};

export default IncrementDecrementComp;
