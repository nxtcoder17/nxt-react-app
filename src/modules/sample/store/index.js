import { addNewStoreModel } from '#root-store/index.js';
import sampleActions from './actions';
import sampleServices from './services';
import storeConfig from './store-config';

export const initState = {
  count: 0,
  data: null,
};

const sampleStore = {
  initState,
  actions: sampleActions,
  services: sampleServices,
};

addNewStoreModel({ key: storeConfig.key, model: sampleStore });
