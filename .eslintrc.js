module.exports = {
  extends: 'eslint-config-madhouselabs',
  settings: {
    webpack: {
      config: './webpack.config.js',
    },
  },
  rules: {
    'react/jsx-props-no-spreading': [
      1,
      {
        custom: 'ignore',
      },
    ],
  },
};
