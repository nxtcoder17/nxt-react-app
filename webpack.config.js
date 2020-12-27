const webpack = require('webpack');
const path = require('path');
const DotEnv = require('dotenv-webpack');

module.exports = (env = { development: true }) => {
  const IS_PRODUCTION = env.production === true;

  const productionOnly = {
    mode: 'production',
    optimization: {
      minimize: true,
    },
  };

  const developmentOnly = {
    mode: 'development',
    devtool: 'eval-source-map',
  };

  return {
    ...(IS_PRODUCTION ? productionOnly : developmentOnly),
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
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|svg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[hash]-[name].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new DotEnv({
        path: IS_PRODUCTION ? './env/production.env' : './env/development.env',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
      extensions: ['.jsx', '.js'],
      alias: {
        '#modules': path.resolve(__dirname, './src/modules'),
        '#commons': path.resolve(__dirname, './src/commons'),
        '#root-store': path.resolve(__dirname, './src/store'),
        '#src': path.resolve(__dirname, './src'),
      },
    },
    devServer: {
      port: env.PORT || 9999,
      host: '0.0.0.0',
      contentBase: path.resolve(__dirname, './public/'),
      disableHostCheck: true,
      historyApiFallback: true,
      hot: true,
    },
  };
};
