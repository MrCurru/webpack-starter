const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    mode: 'development',
    output:{
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles-global.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /styles-global.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            title: 'mi webpack app',
            filename: 'index.html',
            template:'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'syles-global.css',
            ignoreOrder: false
        }),
        new CopyPlugin({
           patterns:[
                {from: 'src/assets/', to: 'assets/'}
           ]
        })
    ]
}
