import React, { Suspense } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import styled, { ThemeProvider } from 'styled-components';
import { StoreProvider } from 'easy-peasy';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import theme from '#commons/theme';
import SampleModule from '#modules/sample';
import store from './store';
import { LoadingIndicator } from '#commons/components/loading-indicator';

const Root = styled.div`
  height: 100%;
  background: #e1ebe4;
  display: grid;
`;

// INFO: Only export Routes to Modules from App, make modules handle their internal routes
export default () => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <Root>
            <Suspense fallback={<LoadingIndicator when />}>
              <BrowserRouter>
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/sample" />}
                />
                <Route path="/sample" component={SampleModule} />
              </BrowserRouter>
            </Suspense>
          </Root>
        </StoreProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};
