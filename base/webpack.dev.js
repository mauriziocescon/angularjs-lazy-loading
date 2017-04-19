const webpack = require("webpack");
const path = require("path");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const ENV = process.env.NODE_ENV = process.env.ENV = "development";

module.exports = webpackMerge(commonConfig, {

    devtool: "cheap-module-eval-source-map",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    },

    devServer: {
        contentBase: path.resolve(__dirname, "dist")
    }
});