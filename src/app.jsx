import React, { Suspense } from 'react';
import { ThemeProvider } from '@material-ui/core';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import theme from '#conf/theme';
import { SampleModule } from '#modules/sample';
import { store } from './store';
import { LoadingIndicator } from './commons/components/loading-indicator';

// Only export Routes from the app.jsx file

export default () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <LoadingIndicator when />
          <Suspense fallback={<LoadingIndicator when />}>
            <Router>
              <Route exact path="/" component={SampleModule} />
              <Route path="/sample" component={SampleModule} />
            </Router>
          </Suspense>
        </StoreProvider>
      </ThemeProvider>
    </>
  );
};
