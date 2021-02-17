const path = require('path');

module.exports = {
  extends: ['eslint-config-madhouselabs'],
  parserOptions: {
    requireConfigFile: true,
    babelOptions: {
      configFile: './babel.config.js',
    },
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules'],
      },
      webpack: {
        config: path.resolve(__dirname, './webpack.config.js'),
      },
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 0,
    'no-param-reassign': ['error', { props: false }],
    'import/no-unresolved': [2, { ignore: ['.svg$'] }],
  },
};
