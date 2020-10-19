const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = require('./config');

const isProduction = config.NODE_ENV === 'production';

const productionOnly = {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: true,
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};

const developmentOnly = {
  mode: 'development',
  devtool: 'eval-source-map',
};

module.exports = {
  ...(isProduction ? productionOnly : developmentOnly),

  entry: ['babel-polyfill', './src/index.jsx'],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js',
    chunkFilename: '[chunkhash].bundle.js',
    publicPath: '/dist/',
  },

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
    extensions: ['.jsx', '.js'],
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
