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
