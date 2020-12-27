export const fromPalette = (accessString, defaultValue = '') => {
  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  return (props) => {
    // eslint-disable-next-line no-eval
    return eval(`props.theme.palette.${accessString}`) || defaultValue;
  };
};

export const doSpacing = (value) => {
  return (props) => `${props.theme.spacing(value)}px`;
};
