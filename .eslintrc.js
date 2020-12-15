module.exports = {
  extends: 'eslint-config-madhouselabs',
  settings: {
    webpack: {
      config: './webpack.config.js',
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 0,
    'no-param-reassign': ['error', { props: false }],
    'import/no-unresolved': [2, { ignore: ['.svg$'] }],
  },
};
