const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ExtractPlugin = require("extract-text-webpack-plugin");
const {CheckerPlugin} = require("awesome-typescript-loader");

module.exports = {
    entry: "./src/index.ts",

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
                    {loader: "awesome-typescript-loader?useBabel=true"},
                    {loader: "preprocess-loader", options: {}}
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
        filename: "lazy.js"
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "angular": "angular",
        "jquery": "$"
    }
};