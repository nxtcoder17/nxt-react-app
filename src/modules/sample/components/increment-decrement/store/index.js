import { action } from 'easy-peasy';
import { addNewStoreModel } from '#root-store/factory';
import { incrementDecrementKey } from './key';

const data = {
  count: 0,
  doIncrement: action((state, payload = 1) => {
    state.count += payload;
  }),

  doDecrement: action((state, payload = 1) => {
    state.count -= payload;
  }),
};

addNewStoreModel({ key: incrementDecrementKey, model: data });
