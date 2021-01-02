import React, { lazy } from 'react';

import { Route } from 'react-router-dom';

const SampleHomePage = lazy(() => import('./containers/sample-home-page'));

// Handle your internal routes over here
const SampleModule = () => {
  return <Route exact path="/sample" component={SampleHomePage} />;
};

export default SampleModule;
