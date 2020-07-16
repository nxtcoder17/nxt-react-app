import { action } from 'easy-peasy';

export const makeActions = (actionObj) =>
  Object.keys(actionObj).reduce(
    (acc, curr) => ({ ...acc, [curr]: action(actionObj[curr]) }),
    {}
  );

export const makeThunks = (thunkObj) =>
  Object.keys(thunkObj).reduce(
    (acc, curr) => ({ ...acc, [curr]: action(thunkObj[curr]) }),
    {}
  );
