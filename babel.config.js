module.exports = {
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: '@emotion/react',
      },
    ],
    '@babel/preset-env',
  ],
  plugins: ['@emotion/babel-plugin'],
};
