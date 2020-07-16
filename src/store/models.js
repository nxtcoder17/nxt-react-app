let models = {};

export const addNewStoreModel = ({ key, model }) => {
  models = { ...models, [key]: model };
};

export const removeStoreModel = (key) => {
  delete models[key];
  models = { ...models };
};

export const getModels = () => models;
