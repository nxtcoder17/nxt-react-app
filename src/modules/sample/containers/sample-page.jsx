import React, { useState } from 'react';
import styled from 'styled-components';
import { Switch, FormControlLabel, AppBar, Toolbar } from '@material-ui/core';
import IncrementDecrementComp from '#modules/sample/components/increment-decrement';
import SideBar from '#commons/components/side-bar';
import { doSpacing } from '#commons/styled-components-util';
import { MediaQuery } from '#commons/media-query';
import { FlexBox } from '#commons/components/flex-box';

const Wrapper = styled.div`
  display: grid;
  overflow-y: hidden;
  ${MediaQuery.md} {
    grid-template-columns: auto 1fr;
    grid-column-gap: ${doSpacing(4)};
  }
`;

const Content = styled.div`
  max-height: 100vh;
  overflow-y: auto;
  padding: 1rem;
`;

const SamplePage = () => {
  const [contentScrollState, setContentScrollState] = useState(false);
  return (
    <>
      <AppBarComp>
        <FlexBox justify="space-between">
          <p>nxtcoder17</p>
          <div>
            <p>Home</p>
            <p>Blog</p>
            <p>Login</p>
          </div>
        </FlexBox>
      </AppBarComp>

      <Wrapper>
        <SideBar />
        <Content>
          <IncrementDecrementComp />
          <FormControlLabel
            control={
              <Switch
                checked={contentScrollState}
                onChange={() => setContentScrollState(!contentScrollState)}
              />
            }
            label="See How the content scrolls ? "
          />
          {contentScrollState && (
            <>
              {Array(50)
                .fill(undefined)
                .map(() => (
                  <p>Hello World </p>
                ))}
            </>
          )}
        </Content>
      </Wrapper>
    </>
  );
};

export default SamplePage;
