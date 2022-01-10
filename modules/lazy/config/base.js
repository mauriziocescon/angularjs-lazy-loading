const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = () => {
  return {

    entry: './src/index.ts',

    resolve: {
      // Add '.ts' and '.tsx' as a resolvable extension.
      extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.scss', '.html', '.json'],

      fallback: {
        url: require.resolve('url'),
        querystring: require.resolve('querystring-es3'),
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

      // clean dist folder
      new CleanWebpackPlugin(),

      new StyleLintPlugin({
        files: 'src/**/*.s?(a|c)ss',
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
            {loader: 'resolve-url-loader'},
            {loader: 'sass-loader', options: {sourceMap: true}},
          ],
        },

        // template loaders
        {
          test: /\.html?$/,
          exclude: /index.html$/,
          use: [
            {loader: 'html-loader', options: {esModule: true, minimize: true}},
          ],
        },

        // all files with '.js' '.ts' '.tsx' extensions will be handled by ts-loader
        {
          test: /\.(js|ts|tsx)?$/,
          exclude: [/node_modules/, /config/],
          use: [
            {loader: 'babel-loader', options: {cacheDirectory: true, presets: ['@babel/env']}},
            {loader: 'ts-loader'},
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

        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
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
