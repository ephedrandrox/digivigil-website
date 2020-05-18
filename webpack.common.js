const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'digivigil-website.bundle.js',
        path: path.resolve(__dirname, 'webroot/'),
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