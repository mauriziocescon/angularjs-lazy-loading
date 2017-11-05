const webpack = require("webpack");
const path = require("path");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./base.js");

module.exports = (env) => {
    return webpackMerge(commonConfig(env), {

        entry: {
            lazy: "./src/index.ts",
            vendor: "./src/test.vendor.ts",
            test: "./src/test.spec.ts",
        },

        devtool: "cheap-module-eval-source-map",

        plugins: [

            new webpack.DefinePlugin({
                "process.env": {
                    "ENV": JSON.stringify("test"),
                },
            }),

            new webpack.optimize.CommonsChunkPlugin({
                name: "vendor",
                minChunks: (module) => {
                    // this assumes your vendor imports exist in the node_modules directory
                    return module.context && module.context.indexOf("node_modules") !== -1;
                },
            }),
        ],

        module:{

            rules: [

                // images loader
                {
                    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                    use: [
                        {loader: "file-loader", options: {name: "[name].[ext]"}},
                    ],
                },
            ],
        },

        output: {
            path: path.resolve(__dirname, "../dist"),
            filename: "[name].js",
            library: "Lazy",
            libraryTarget: "umd",
        },
    });
};
