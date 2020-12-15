import React, { Suspense } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { StoreProvider } from 'easy-peasy';
import { useRoutes } from 'hookrouter';
import theme from '#commons/theme';
import SampleModule from '#modules/sample';
import store from './store';
import { LoadingIndicator } from './commons/components/loading-indicator';

// INFO: Only export Routes to Modules from App, make modules handle their internal routes

export default () => {
  const routes = {
    '/': () => <SampleModule />,
    '/sample': () => <SampleModule />,
  };

  const router = useRoutes(routes);
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <Suspense fallback={<LoadingIndicator when />}>{router}</Suspense>
        </StoreProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};
