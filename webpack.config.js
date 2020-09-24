const webpack = require('webpack');
const path = require('path');

const config = require('./config');

const [production, development] = ['production', 'development'];

const isProduction = () => config.NODE_ENV === production;

module.exports = {
  entry: './src/index.jsx',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'builds'),
    filename: 'bundle.js',
    chunkFilename: '[chunkhash].bundle.js',
    publicPath: '/builds',
  },

  mode: isProduction() ? production : development,

  ...(!isProduction() ? { devtool: 'eval-source-map' } : {}),

  module: {
    rules: [
      {
        test: /.*\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            rootMode: 'upward',
          },
        },
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin(['NODE_ENV', 'PORT', 'SERVER_URL']),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '#conf': path.resolve(__dirname, './src/conf'),
      '#modules': path.resolve(__dirname, './src/modules'),
      '#commons': path.resolve(__dirname, './src/commons'),
      '#root-store': path.resolve(__dirname, './src/store'),
      '#src': path.resolve(__dirname, './src'),
    },
  },
  devServer: {
    port: config.PORT,
    host: '0.0.0.0',
    contentBase: path.resolve(__dirname, './public/'),
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
  },
};
