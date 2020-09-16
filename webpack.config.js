const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const RealFaviconPlugin = require('real-favicon-webpack-plugin');
module.exports = {
    entry: './assets/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './public/asset'),
        publicPath: '/asset/',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{ loader: 'file-loader' }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, './templates/layouts/default.html.ep'),
            template: '!!html-loader!assets/mojo-layouts/default.html.ep',
            inject: 'head',
        }),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, './templates/layouts/other.html.ep'),
            template: '!!html-loader!assets/mojo-layouts/other.html.ep',
            inject: 'head',
        }),
        new RealFaviconPlugin({
            faviconJson: 'assets/favicon/favicon.json',
            outputPath: 'asset/favicons',
            inject: true
        }),
    ]
}
