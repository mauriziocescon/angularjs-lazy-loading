const webpack = require("webpack");
const path = require("path");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./base.js");

module.exports = (env) => {
    return webpackMerge(commonConfig(env), {
        entry: {
            lazy: "./src/index.ts",
            vendor: "./src/test.vendor.ts",
            test: "./src/test.spec.ts"
        },

        devtool: "cheap-module-eval-source-map",

        plugins: [

            new webpack.DefinePlugin({
                "process.env": {
                    "ENV": JSON.stringify("test")
                }
            })
        ],

        module:{

            rules: [

                // images loader
                {
                    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                    use: [
                        {loader: "file-loader", options: {name: "[name].[ext]"}}
                    ]
                }
            ]
        },

        output: {
            path: path.resolve(__dirname, "../dist"),
            filename: "[name].js"
        }
    });
};
