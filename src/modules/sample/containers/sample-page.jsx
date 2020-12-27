import React, { useEffect } from 'react';
import { Typography, Button, Box, Paper } from '@material-ui/core';
import { useStoreActions, useStoreState } from 'easy-peasy';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import { FlexBox } from '#commons/components/flex-box';
import { sampleModuleKey } from '../store/key';
import { fromPalette, doSpacing } from '#commons/styled-components-util';

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
  background: #bfc8c9;
`;

const Content = styled((props) => <Paper variant="outlined" {...props} />)`
  display: grid;
  grid-row-gap: ${doSpacing(2)};
  width: 800px;
  padding: ${doSpacing(4)};
  img {
    width: 500px;
    height: 250px;
  }
  hr {
    padding: ${doSpacing(0.25)};
    background: ${fromPalette('secondary.main')};
  }
  a {
    text-decoration: unset;
  }
`;

const SamplePage = () => {
  const { count, data } = useStoreState((state) => state[sampleModuleKey]);

  const { doIncrement, doDecrement, fetchData } = useStoreActions(
    (actions) => actions[sampleModuleKey]
  );

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  return (
    <Wrapper>
      <Content>
        <div>
          <Typography variant="h4">FlexBox</Typography>
          <hr />
        </div>

        <FlexBox justify="center">
          <img
            src="https://media1.giphy.com/media/VGoJenEbPbFttiwZhX/giphy.gif?cid=ecf05e479ayxvk70at032miiyamvx4c3iks4nta3ag1eabui&rid=giphy.gif"
            alt="Debruyne goal"
          />
        </FlexBox>

        <div>
          <Typography variant="h4">Easy Peasy Redux store</Typography>
          <hr />
        </div>

        <Typography variant="h5">
          Sample Module has been setup, Value: {count}
        </Typography>

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

        <div>
          {data == null && <Typography variant="h5">Data is null </Typography>}

          {data != null && data.name && (
            <Typography variant="h5">{data.name}</Typography>
          )}

          {data != null && data.email && (
            <Typography variant="h5">{data.email}</Typography>
          )}
        </div>

        <Typography
          variant="h1"
          style={{
            fontStyle: 'italic',
            fontFamily: 'Dancing Script',
            textAlign: 'center',
          }}
        >
          Ready to Roll
        </Typography>

        <a href="https://github.com/nxtcoder17/nxt-react-app">
          <Button
            variant="contained"
            color="primary"
            style={{ width: 'min-content', padding: doSpacing(1) }}
          >
            <FlexBox gap={1}>
              <GitHubIcon />
              Github
            </FlexBox>
          </Button>
        </a>
      </Content>
    </Wrapper>
  );
};

export default SamplePage;
