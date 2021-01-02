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
    // React 17 does not need JSX in scope
    // 'react/jsx-uses-react': 'off',
    // 'react/react-in-jsx-scope': 'off',
    'no-param-reassign': ['error', { props: false }],
    'import/no-unresolved': [2, { ignore: ['.svg$'] }],
  },
};
