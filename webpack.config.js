const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'builds'),
    filename: 'bundle.js',
    chunkFilename: '[chunkhash].bundle.js',
    publicPath: '/builds',
  },

  mode: process.env.NODE_ENV !== 'PRODUCTION' ? 'development' : 'production',

  ...(process.env.NODE_ENV !== 'PRODUCTION'
    ? { devtool: 'eval-source-map' }
    : {}),

  module: {
    rules: [
      {
        test: /.*\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.SERVER': process.env.SERVER,
      'process.env.PORT': process.env.PORT,
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '#conf': path.resolve(__dirname, './src/conf'),
      '#modules': path.resolve(__dirname, './src/modules'),
      '#commons': path.resolve(__dirname, './src/commons'),
      '#src': path.resolve(__dirname, './src'),
    },
  },
  devServer: {
    port: 9999,
    host: '0.0.0.0',
    contentBase: path.resolve(__dirname, './public/'),
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
  },
};
