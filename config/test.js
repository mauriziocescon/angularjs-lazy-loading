// tslint:disable:object-literal-sort-keys max-line-length no-console
const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const {merge} = require('webpack-merge');
const commonConfig = require('./base.js');

module.exports = (env) => {
  return merge(commonConfig(env), {

    entry: {
      vendors: './src/vendors.ts',
      app: './src/main.ts',
      tests: './src/tests.ts',
    },

    mode: 'development',

    plugins: [

      // copy lazy
      new CopyPlugin({
        patterns: [
          {from: 'modules/lazy/dist'},
        ],
      }),

      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('test'),
        },
      }),
    ],

    module: {

      rules: [

        // creates style nodes from JS strings
        // translates CSS into CommonJS
        // compiles Sass to CSS
        {
          test: /\.scss$/,
          use: [
            {loader: 'style-loader'},
            {loader: 'css-loader', options: {modules: false}},
            {loader: 'resolve-url-loader', options: {absolute: true}},
            {loader: 'sass-loader', options: {sourceMap: true}},
          ],
        },
      ],
    },

    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].js',
    },
  });
};
