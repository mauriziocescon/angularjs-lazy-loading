const webpack = require("webpack");
const path = require("path");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./base.js");

module.exports = function (env) {
    return webpackMerge(commonConfig(env), {
        entry: {
            app: "./src/index.ts",
            vendor: "./src/test.vendor.ts",
            test: "./src/test.spec.ts"
        },

        devtool: "inline-source-map",

        plugins: [

            new webpack.DefinePlugin({
                "process.env": {
                    "ENV": JSON.stringify("test")
                }
            })
        ],

        output: {
            path: path.resolve(__dirname, "../dist"),
            filename: "[name].[hash].js"
        }
    });
};