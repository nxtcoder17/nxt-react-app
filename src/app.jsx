import { MuiThemeProvider } from '@material-ui/core';
import { StoreProvider } from 'easy-peasy';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { Suspense } from 'react';
import {
  CacheProvider,
  ThemeProvider as EmotionThemeProvider,
} from '@emotion/react';
import { ToastContainer } from 'react-toastify';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { LoadingIndicator } from '~/commons/components/loading-indicator';
import theme from '~/commons/theme';
import SampleModule from '~/modules/sample';
import { TraverseRoutes } from './commons/components/traverse-routes';
import { rootStore } from './store';
import cache from '~/cache';

import 'react-toastify/dist/ReactToastify.min.css';

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
    <CacheProvider value={cache}>
      <MuiThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>
          <CssBaseLine />

          <ToastContainer />

          <StoreProvider store={rootStore}>
            <Suspense fallback={<LoadingIndicator when />}>
              <Root>
                <BrowserRouter>
                  <TraverseRoutes routes={routes} />
                </BrowserRouter>
              </Root>
            </Suspense>
          </StoreProvider>
        </EmotionThemeProvider>
      </MuiThemeProvider>
    </CacheProvider>
  );
};
