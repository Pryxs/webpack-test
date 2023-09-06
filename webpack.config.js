const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path")

module.exports = {
    mode: "development",
    entry : "./src/index.js",
    output : {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    }, 
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        hot: true,
        liveReload: true,
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css',
        })
    ],
    watch: true
}