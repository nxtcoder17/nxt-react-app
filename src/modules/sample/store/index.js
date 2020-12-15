// @ts-nocheck
import { action, thunk } from 'easy-peasy';
import { createContext } from 'react';
import { addNewStoreModel } from '#root-store/factory';

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
      actions.setData({ name: 'Anshuman', email: 'nxtcoder17@gmail.com' });
    }, 3000);
  }),
};

const key = 'sample';
addNewStoreModel({ key, model: initState });

export default createContext({
  key,
  store: (state) => state[key],
});
