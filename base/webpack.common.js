const webpack = require("webpack");
const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ExtractPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CheckerPlugin} = require("awesome-typescript-loader");


module.exports = {
    entry: {
        app: "./src/main.ts",
        vendor: "./src/vendor.ts"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add ".ts" and ".tsx" as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".scss", ".html", ".json"]
    },

    plugins: [

        // clean dist folder
        new CleanPlugin(["dist", "build"], {
            verbose: true,
            dry: false,
            exclude: []
        }),

        new CopyPlugin([{
            from: "src/index.html"
        }, {
            from: "src/assets/i18n", to: "assets/i18n"
        }, {
            from: "../lazy/dist"
        }]),

        new CheckerPlugin(),

        // insert file dynamically
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: "head"
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf("node_modules") !== -1;
            }
        })
    ],

    module: {

        rules: [

            // creates style nodes from JS strings
            // translates CSS into CommonJS
            // compiles Sass to CSS
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"}
                ]
            },

            // template loaders
            {
                test: /\.html?$/,
                exclude: /index.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            exportAsEs6Default: true,
                            minimize: true
                        }
                    }
                ]
            },

            // images loader
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: [
                    {loader: "file-loader?name=assets/imgs/[name].[hash].[ext]"}
                ]
            },

            // all files with a ".ts" or ".tsx" extension will be handled by "ts-loader"
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                use: [
                    {loader: "awesome-typescript-loader?useBabel=true"},
                    {loader: "preprocess-loader", options: {STRICT_DI: true}}
                ]
            },

            // All output ".js" files will have any sourcemaps re-processed by "source-map-loader".
            {
                test: /\.js$/,
                enforce: "pre",
                use: [
                    {loader: "source-map-loader"}
                ]
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    }
};