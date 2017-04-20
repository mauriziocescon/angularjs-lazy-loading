const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./base.js");

module.exports = function (env) {
    return webpackMerge(commonConfig(env), {

        plugins: [

            new webpack.optimize.UglifyJsPlugin({
                mangle: {
                    keep_fnames: true
                }
            }),

            new webpack.DefinePlugin({
                "process.env": {
                    "ENV": JSON.stringify("production")
                }
            })
        ]
    });
};