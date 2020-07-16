import React from 'react';
import { Route } from 'react-router-dom';
import { lazyLoad } from '#commons/services/lazy-load';
import storeConfig from './store/store-config';
import './store';
import { StoreIsReady } from '#commons/components/store-is-ready';

const SamplePageModule = lazyLoad(
  () => import('./containers/sample-page'),
  'SamplePage'
);

export const SampleModule = () => (
  <StoreIsReady storeKey={storeConfig.key}>
    <Route exact path={'/'} component={SamplePageModule} />
    <Route path={'/sample'} component={SamplePageModule} />
  </StoreIsReady>
);
