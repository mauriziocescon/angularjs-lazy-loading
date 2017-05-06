const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./base.js");

module.exports = function (env) {
    return webpackMerge(commonConfig(env), {
        entry: {
            app: "./src/main.ts",
            vendor: "./src/vendor.ts",
            test: "./src/test.spec.ts"
        },

        devtool: "cheap-module-eval-source-map",

        plugins: [

            // copy lazy
            new CopyPlugin([{
                from: "../lazy/dist/lazy.js"
            }]),

            new webpack.DefinePlugin({
                "process.env": {
                    "ENV": JSON.stringify("test")
                }
            })
        ]
    });
};