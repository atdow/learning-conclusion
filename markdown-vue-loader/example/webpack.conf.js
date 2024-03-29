/*
 * @Author: atdow
 * @Date: 2022-04-01 21:49:54
 * @LastEditors: null
 * @LastEditTime: 2022-04-01 23:08:15
 * @Description: file description
 */
const path = require('path');
const resolvePath = targetPath => path.resolve(__dirname, targetPath);
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: resolvePath('./entry.js'),
    output: {
        filename: '[name].boundle.js',
        path: resolvePath('../dist'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader?cacheDirectory',
            exclude: /node_modules/
        }, {
            test: /\.md$/,
            use: [{
                loader: 'vue-loader'
            }, {
                loader: 'markdone-vue-loader',
                options: {
                    demoWrapperClass: 'vue-demo-wrapper',
                    templateClass: 'vue-demo-container',
                    descWrapperClass: 'vue-demo-desc',
                    highlightClass: 'vue-demo-highlight'
                }
            }]
        }, {
            test: /\.(sa|sc|c)ss$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'md loader',
            filename: resolvePath('../dist/index.html'),
            template: resolvePath('./index.html')
        })
    ],
    resolve: {
        extensions: ['.vue', '.js', '.md', '.ts'],
        modules: ['node_modules', 'example']
    },
    resolveLoader: {
        alias: {
            'markdone-vue-loader': resolvePath('../lib/index.js')
        }
    },
    devtool: 'inline-source-map',
    devServer: {
        stats: "minimal",
        contentBase: __dirname
    },
    mode: 'development'
};