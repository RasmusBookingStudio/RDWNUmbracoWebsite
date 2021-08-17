var webpack = require("webpack");
var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    // The entry area tells webpack what files it should create bundles for.
    entry: {
        grid: "./App_Plugins/Grid/index.ts"
    },

    // We tell webpack that it needs to output the files in the build directory,
    // and calling each file the name of its entry
    output: {
        path: path.join(__dirname, "App_Plugins/Grid/Scripts"),
        filename: './[name].js'
    },
    
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],

    module: {
        // This area specifies how we should treat each file what webpack wants to bundle
        // The loaders areas tells what loader to use (like a pre-precompiler)
        rules: [
            // we use babel-loader to load our jsx and tsx files
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["react-app",
                            {
                                "flow": false,
                                "typescript": true
                            }]
                        ]
                    }
                },
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: './'
                        }
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: './'
                        }
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },

    resolve: {
        // Webpack does normally look in the node_modules directory closest to the file that it is executing.
        // This line tells Webpack to first look for packages in the Umbraco8Website's node_module folder.
        // This is to ensure that there is not loaded two versions of the same dependency
        modules: [path.resolve(__dirname, "./node_modules/"), "node_modules"],
        extensions: ['.tsx', '.ts', '.js']
    },

    // Externals tells webpack that you don't need to import theese modules, and it can fetch them on window
    externals: {
        "jquery": "jQuery",
        "angular": "angular"
    }
};