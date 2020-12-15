let models = {};
const Model = {
  add: ({ key, model }) => {
    models = { ...models, [key]: { ...model } };
  },
  get: () => models,
};

export default Model;
