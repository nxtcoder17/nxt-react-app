import { makeActions } from '#commons/services/easy-peasy';

export const initState = {
  count: 0,
};

const actions = {};

actions.doIncrement = (state, payload = 1) => {
  state.count += payload;
};

actions.doDecrement = (state, payload = 1) => {
  state.count -= payload;
};

export const sampleActions = makeActions(actions);
