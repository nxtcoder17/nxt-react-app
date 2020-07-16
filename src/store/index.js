import { createStore } from 'easy-peasy';
import { getModels } from '#src/store/models';

const models = getModels();
export const store = createStore(models);
if (Object.keys(models).length > 0) {
  store.reconfigure(models);
}
