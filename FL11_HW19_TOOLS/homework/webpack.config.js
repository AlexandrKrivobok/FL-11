const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = ({
    entry: './src/js/index.js',
    output: {
        filename: 'js/app.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        // Copies individual files or entire directories, which already exist, to the build directory.
        // we use it for copying images from our src/img folder to dist/images
        new CopyWebpackPlugin([
            { from: 'src/img', to: 'images' },
        ]),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    isDevelopment
                    ? 'style-loader'
                    : { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDevelopment,
                        }
                    },
                    'sass-loader'
                ]

            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'images/[name].[ext]',
                            limit: 10000,
                        },
                    },
                ],
            },
        ]
    }
});