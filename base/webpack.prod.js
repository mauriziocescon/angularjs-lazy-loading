const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const ENV = process.env.NODE_ENV = process.env.ENV = "production";

module.exports = webpackMerge(commonConfig, {

    plugins: [

        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                keep_fnames: true
            }
        }),

        new webpack.DefinePlugin({
            "process.env": {
                "ENV": JSON.stringify(ENV)
            }
        })
    ]
});