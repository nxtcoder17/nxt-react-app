import { useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';
import { nanoid } from 'nanoid';

function recurseReset(obj) {
  Object.keys(obj).forEach((item) => {
    if (obj[item] === 'reset') obj[item]();
    if (typeof obj[item] === 'object') recurseReset(obj[item]);
  });
}

export const useResetStore = (nodeActionSelector) => {
  const actionsObj = useStoreActions(nodeActionSelector);
  useEffect(() => {
    if (actionsObj) {
      recurseReset(actionsObj);
    }
  }, [actionsObj]);
};

export function consumeList(receivedList) {
  const list = [];
  const data = {};

  receivedList.forEach((item) => {
    const id = item._id || nanoid();
    list.push(id);
    data[id] = item;
  });

  return { list, data };
}

export function produceList({ list = [], data = {} }) {
  return list.map((id) => data[id]);
}

export function ensureReduxState(state, key, consumer) {
  const splits = key.split('.');
  let obj = state;
  splits.forEach((splitKey) => {
    if (splitKey in obj) {
      obj = obj[splitKey];
    } else {
      consumer(
        `${splitKey} is not one of the [${Object.keys(obj).join(', ')}]`
      );
    }
  });
  // eslint-disable-next-line no-eval
  return eval(`state.${key}`);
}
