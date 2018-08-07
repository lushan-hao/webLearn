const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('PurifycSS-webpack')
const entry = require("./webpack_config/entry_webpack.js");
const CopyWebpackPlugin= require('copy-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: entry,
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
                    use: [{
                        loader: 'css-loader',
                        options: {importLoaders: 1}
                    },'postcss-loader']
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
                //include:[path.resolve(__dirname,"src")],
                loader: 'html-withimg-loader'
            },{
                test: /\.scss/,
                use: ExtractTextWebpackPlugin.extract({
                    use: [{
                        loader: 'CSS-loader'
                    },{
                        loader: 'sass-loader'
                    }],
                    fallback: 'style-loader'
                })
               
            },{
                test:/\.(jsx|.js)$/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets:[
                            'env','react'
                        ]
                    }
                },
                exclude:/node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin ({
            filename: 'index.html',
            title: 'indexa---title',
            chunks: ['indexx'],
            minify: {
                removeAttributeQuotes: true,
                // collapseWhitespace: true
            },
            hash: true,
            template: './src/index.html'
        }),
        // new HtmlWebpackPlugin ({
        //     filename: 'indexb.html',
        //     title: 'indexb---title',
        //     chunks: ['indexy'],
        //     minify: {
        //         removeAttributeQuotes: true,
        //         // collapseWhitespace: true
        //     },
        //     hash: true,
        //     template: './src/index1.html'
        // }),
        // 
        
        new ExtractTextWebpackPlugin('css/index.css'),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        }),
        new webpack.BannerPlugin('come on'),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new CopyWebpackPlugin([{
            from: __dirname + '/src/public',
            to: './public'
        }])
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