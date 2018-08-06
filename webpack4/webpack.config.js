const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        'index':'./src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: 'http://127.0.0.1:8081/'
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                // use: ['style-loader','css-loader']
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }, {
                test: /\.(png|jpg|gif)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 500,
                        outputPath: 'img/'
                    }
                }]
            },{
                test: /\.(html|htm)$/i,
                loader: 'html-withimg-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            filename: 'indexa.html',
            chunks: ['index'],
            minify: {
                removeAttributeQuotes: true,
                // collapseWhitespace: true
            },
            hash: true,
            template: './src/index.html'
        }),
        new HtmlPlugin({
            filename: 'indexb.html',
            chunks: ['index1'],
            minify: {
                removeAttributeQuotes: true,
                // collapseWhitespace: true
            },
            hash: true,
            template: './src/index1.html'
        }),
        
        new ExtractTextWebpackPlugin('css/index.css')
    ],
    devServer:{
        contentBase: path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        compress: true,
        open: true,
        hot: true,
        port: 8081
    }
}