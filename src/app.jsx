import { MuiThemeProvider } from '@material-ui/core';
import { StoreProvider } from 'easy-peasy';
import React, { Suspense } from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { LoadingIndicator } from '~/commons/components/loading-indicator';
import theme from '~/commons/theme';
import SampleModule from '~/modules/sample';
import { TraverseRoutes } from './commons/components/traverse-routes';
import { rootStore } from './store';
import { NotistackProvider } from './commons/components/notistack-provider';

const Root = styled.div`
  height: 100%;
  display: grid;
  background: rgba(255, 255, 255, 0.3);
`;

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/sample" />,
  },

  {
    path: '/sample',
    component: SampleModule,
  },
];

export default () => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <NotistackProvider>
          <StoreProvider store={rootStore}>
            <Root>
              <Suspense fallback={<LoadingIndicator when />}>
                <BrowserRouter>
                  <TraverseRoutes routes={routes} />
                </BrowserRouter>
              </Suspense>
            </Root>
          </StoreProvider>
        </NotistackProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};
