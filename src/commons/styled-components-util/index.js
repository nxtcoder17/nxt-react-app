/* eslint-disable no-eval */
/* eslint-disable no-unused-vars */

export const fromPalette = (accessString, defaultValue = '') => {
  return (props) => eval(`props.theme.palette.${accessString}`) || defaultValue;
};

export const doSpacing = (value) => {
  return (props) => `${props.theme.spacing(value)}px`;
};

export const evalFromTheme = (expr) => {
  return (props) => eval(`props.theme.${expr}`);
};
