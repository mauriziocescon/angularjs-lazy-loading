const webpack = require("webpack");
const path = require("path");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const ENV = process.env.NODE_ENV = process.env.ENV = "development";

module.exports = webpackMerge(commonConfig, {

    devtool: "cheap-module-eval-source-map",

    plugins: [

        new webpack.DefinePlugin({
            "process.env": {
                "ENV": JSON.stringify(ENV)
            }
        })
    ],

    devServer: {
        contentBase: path.resolve(__dirname, "dist")
    }
});