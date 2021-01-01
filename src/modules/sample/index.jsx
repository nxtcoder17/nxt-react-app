import { lazy } from 'react';
import { Route } from 'react-router-dom';

const SamplePageModule = lazy(() => import('./containers/sample-page'));

// Handle your internal routes over here
const SampleModule = () => {
  return <Route exact path="/sample" component={SamplePageModule} />;
};

export default SampleModule;
