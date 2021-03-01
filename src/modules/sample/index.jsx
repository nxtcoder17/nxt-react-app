import { lazy } from 'react';
import { TraverseRoutes } from '~/commons/components/traverse-routes';
import { joinUrl } from '~/commons/random-functions/url-join';
import './store';

const buildUrl = (endPoint) => joinUrl('/sample', endPoint);

const routes = [
  {
    path: buildUrl('/'),
    component: lazy(() => import('./pages/sample-home-page')),
  },
];

console.log('I am here');
const SampleModule = () => <TraverseRoutes routes={routes} />;

export default SampleModule;
