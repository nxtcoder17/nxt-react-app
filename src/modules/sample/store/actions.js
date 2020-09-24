const sampleActions = {};

sampleActions.doIncrement = (state, payload = 1) => {
  state.count += payload;
};

sampleActions.doDecrement = (state, payload = 1) => {
  state.count -= payload;
};

sampleActions.setData = (state, payload = null) => {
  state.data = payload;
};

export default sampleActions;
