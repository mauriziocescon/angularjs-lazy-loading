const webpack = require('webpack');
const path = require('path');
const {merge} = require('webpack-merge');
const commonConfig = require('./base.js');

module.exports = (env) => {
  return merge(commonConfig(env), {

    entry: {
      vendors: './src/test-vendors.ts',
      lazy: './src/index.ts',
      tests: './src/tests.ts',
    },

    mode: 'development',

    plugins: [

      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('test'),
        },
      }),
    ],

    module: {

      rules: [
      ],
    },

    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].js',
    },
  });
};
