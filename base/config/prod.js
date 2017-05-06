const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./base.js");

module.exports = function (env) {
    return webpackMerge(commonConfig(env), {

        devtool: "source-map",

        plugins: [

            // copy lazy
            new CopyPlugin([{
                from: "../lazy/dist"
            }]),

            new webpack.optimize.UglifyJsPlugin({
                mangle: {
                    keep_fnames: true
                },
                sourceMap: true
            }),

            new webpack.DefinePlugin({
                "process.env": {
                    "ENV": JSON.stringify("production")
                }
            })
        ]
    });
};