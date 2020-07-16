import { addNewStoreModel } from '#src/store/models';
import { initState, sampleActions } from '#modules/sample/store/actions';
import { sampleServices } from '#modules/sample/store/services';
import localStoreConfig from './store-config';

const sampleStore = {
  ...initState,
  ...sampleActions,
  ...sampleServices,
};

addNewStoreModel({ key: localStoreConfig.key, model: sampleStore });
