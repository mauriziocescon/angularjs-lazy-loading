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

        devtool: "inline-source-map",

        plugins: [

            // copy lazy
            new CopyPlugin([{
                from: "../lazy/dist"
            }]),

            new webpack.DefinePlugin({
                "process.env": {
                    "ENV": JSON.stringify("test")
                }
            })
        ]
    });
};