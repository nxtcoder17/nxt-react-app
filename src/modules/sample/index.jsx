import React, { useContext, lazy } from 'react';
import { useRoutes } from 'hookrouter';
import sampleStoreCtx from './store/context';
import { StoreIsReady } from '#commons/components/store-is-ready';
import './store';

const SamplePageModule = lazy(() => import('./containers/sample-page'));

const SampleModule = () => {
  const { key } = useContext(sampleStoreCtx);
  const routes = {
    '/': () => <SamplePageModule />,
    '/sample': () => <SamplePageModule />,
  };

  const router = useRoutes(routes);
  return <StoreIsReady modelKey={key}>{router}</StoreIsReady>;
};

export default SampleModule;
