import React, { lazy } from 'react';
import { useRoutes } from 'hookrouter';
import { sampleModuleKey } from './store/key';
import { StoreIsReady } from '#commons/components/store-is-ready';
import './store';

const SamplePageModule = lazy(() => import('./containers/sample-page'));

// Handle your internal routes over here
const SampleModule = () => {
  const routes = {
    '/': () => <SamplePageModule />,
    '/sample': () => <SamplePageModule />,
  };

  const router = useRoutes(routes);
  return <StoreIsReady modelKey={sampleModuleKey}>{router}</StoreIsReady>;
};

export default SampleModule;
