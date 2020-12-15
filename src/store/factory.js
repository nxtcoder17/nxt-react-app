import store from './index';
import StoreModel from './models';

const postStoreUpdateHook = (newModels) => store.reconfigure(newModels);

export const addNewStoreModel = ({ key, model }) => {
  StoreModel.add({ key, model });
  postStoreUpdateHook(StoreModel.get());
};
