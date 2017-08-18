const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./base.js");

module.exports = function (env) {
    return webpackMerge(commonConfig(env), {

        devtool: "inline-source-map",

        plugins: [

            // copy lazy
            new CopyPlugin([{
                from: "../lazy/dist"
            }]),

            new webpack.DefinePlugin({
                "process.env": {
                    "ENV": JSON.stringify("development")
                }
            })
        ],

        devServer: {
            clientLogLevel: "info",
            compress: true,
            contentBase: path.resolve(__dirname, "dist"),
            inline: true,
            historyApiFallback: true,
            hot: true,
            open: true,
            overlay: {
                warnings: true,
                errors: true
            }
        }
    });
};
