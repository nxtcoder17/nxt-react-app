import { createStore } from 'easy-peasy';
import { getStoreModels } from './models';

export const store = createStore({});

const storeUpdateHook = (newModels) => store.reconfigure(newModels);

const storeModels = getStoreModels(storeUpdateHook);

export const addNewStoreModel = storeModels.add;
