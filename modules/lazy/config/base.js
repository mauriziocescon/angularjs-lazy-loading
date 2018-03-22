const webpack = require('webpack');
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const {CheckerPlugin} = require('awesome-typescript-loader');

module.exports = () => {
  return {

    entry: './src/index.ts',

    resolve: {
      // Add ".ts" and ".tsx" as a resolvable extension.
      extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.scss', '.html', '.json'],
    },

    optimization: {

      splitChunks: {
        cacheGroups: {
          common: {
            test: /node_modules/,
            chunks: 'initial',
          },
        },
      },
    },

    plugins: [

      // environment variables
      new webpack.NormalModuleReplacementPlugin(/\.\.\/environments\/environment/, (resource) => {
        const newRequest = path.resolve(__dirname, `../src/environments/environment.${env.name}.ts`);
        if (fs.existsSync(newRequest)) {
          resource.request = resource.request + `.${env.name}`;
        }
      }),

      // scope hoisting
      new webpack.optimize.ModuleConcatenationPlugin(),

      // clean dist folder
      new CleanPlugin(['dist', 'build'], {
        root: path.resolve(__dirname, '../'),
        verbose: true,
        dry: false,
        exclude: [],
      }),

      new CheckerPlugin(),

      new StyleLintPlugin(),
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
            {loader: 'css-loader', options: {minimize: true, modules: false}},
            {loader: 'resolve-url-loader'},
            {loader: 'sass-loader', options: {sourceMap: true}},
          ],
        },

        // template loaders
        {
          test: /\.html?$/,
          exclude: /index.html$/,
          use: [
            {loader: 'html-loader', options: {exportAsEs6Default: true, minimize: true}},
          ],
        },

        // all files with ".js .ts .tsx" extensions will be handled by ts-loader
        {
          test: /\.(js|ts|tsx)?$/,
          exclude: [/node_modules/, /config/],
          use: [
            {loader: 'awesome-typescript-loader', options: {useBabel: true, useCache: true}},
          ],
        },

        // preprocess + ts-lint
        {
          test: /\.(js|ts|tsx)?$/,
          exclude: [/node_modules/, /config/],
          enforce: 'pre',
          use: [
            {loader: 'tslint-loader', options: {emitErrors: false, formatter: 'stylish'}},
          ],
        },

        // All output ".js" files will have any sourcemaps re-processed by "source-map-loader".
        {
          test: /\.js$/,
          enforce: 'pre',
          use: [
            {loader: 'source-map-loader'},
          ],
        },
      ],
    },
  };
};
