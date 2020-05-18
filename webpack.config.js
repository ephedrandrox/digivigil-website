var path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    devServer: {
        contentBase: './webroot/',
        historyApiFallback: true
    },
    output: {
        filename: 'digivigil-website-chunk.js',
        path: path.resolve(__dirname, 'webroot/'),
        chunkFilename: "chunk-[name].[contenthash].js",
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: '/node_modules',
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["@babel/env",
                            "@babel/react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: false
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.ttf$/,
                use: [
                    {
                        loader: 'ttf-loader',
                        options: {
                            name: './fonts/[hash].[ext]',
                        },
                    },
                ]
            }
        ]
    }
};