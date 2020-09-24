import { action, thunk } from 'easy-peasy';

const makeActions = (actionObj) =>
  Object.keys(actionObj).reduce(
    (acc, curr) => ({ ...acc, [curr]: action(actionObj[curr]) }),
    {}
  );

const makeThunks = (thunkObj) =>
  Object.keys(thunkObj).reduce(
    (acc, curr) => ({ ...acc, [curr]: thunk(thunkObj[curr]) }),
    {}
  );

export const getStoreModels = (postUpdateHook) => {
  let models = {};

  return {
    get: () => models,
    add: ({ key, model }) => {
      const newModel = {
        ...model.initState,
        ...makeActions(model.actions),
        ...makeThunks(model.services),
      };

      models = { ...models, [key]: { ...newModel } };
      postUpdateHook(models);
    },
    remove: (key) => {
      delete models[key];
      postUpdateHook(models);
    },
  };
};
