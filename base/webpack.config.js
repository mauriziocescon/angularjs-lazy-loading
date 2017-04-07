const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ExtractPlugin = require("extract-text-webpack-plugin");
const {CheckerPlugin} = require("awesome-typescript-loader");

module.exports = {
    entry: "./src/main.ts",

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add ".ts" and ".tsx" as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".scss", ".html"]
    },

    // clean dist folder
    plugins: [
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
            from: "../lazy/dist/lazy.js"
        }, {
            from: "../lazy/dist/lazy.js.map"
        }]),
        new CheckerPlugin()
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

            // all files with a ".ts" or ".tsx" extension will be handled by "ts-loader"
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                use: [
                    {loader: "awesome-typescript-loader?useBabel=true"}
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
        filename: "base.js"
    },

    devServer: {
        contentBase: path.resolve(__dirname, "dist")
    }
};