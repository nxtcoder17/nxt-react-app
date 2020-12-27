// @ts-nocheck
import { action, thunk } from 'easy-peasy';
import { addNewStoreModel } from '#root-store/factory';
import { sampleModuleKey } from './key';

export const initState = {
  count: 0,
  data: null,

  doIncrement: action((state, payload = 1) => {
    state.count += payload;
  }),

  doDecrement: action((state, payload = 1) => {
    state.count -= payload;
  }),

  setData: action((state, payload = null) => {
    state.data = payload;
  }),

  fetchData: thunk(async (actions, _payload) => {
    setTimeout(() => {
      actions.setData({ name: 'nxtcoder17', email: 'nxtcoder17@gmail.com' });
    }, 3000);
  }),
};

addNewStoreModel({ key: sampleModuleKey, model: initState });
