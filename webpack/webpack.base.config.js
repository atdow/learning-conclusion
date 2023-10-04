/*
 * @Author: atdow
 * @Date: 2023-10-04 17:05:34
 * @LastEditors: null
 * @LastEditTime: 2023-10-04 18:27:08
 * @Description: file description
 */
const path = require('path')
const resolvePath = (targetPath) => path.resolve(__dirname, targetPath)
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: resolvePath('../src/main.js'),
  output: {
    filename: 'js/[name].[chunkhash].js',
    path: resolvePath('../dist'),
    publicPath: '/learning-conclusion/',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory',
        exclude: /node_modules/,
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
          },
          {
            loader: 'markdown-vue-loader',
            options: {
              demoWrapperClass: 'vue-demo-wrapper',
              templateClass: 'vue-demo-container',
              descWrapperClass: 'vue-demo-desc',
              highlightClass: 'vue-demo-highlight',
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c|le)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      // iconfont字体等处理
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'fonts/',
          },
        },
      },
      {
        test: /\.(png|jpg|gif|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              esModule: false, // 关闭es6模块化解析
              //[hash:7]取图片的hash的前7位  [ext]取文件原来扩展名
              // name: utils.assetsPath('img/[name].[hash:7].[ext]')
              outputPath: 'assets/img/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'learning-conclusion',
      filename: resolvePath('../dist/index.html'),
      template: resolvePath('../public/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: path.join(__dirname, '../public'), to: path.join(__dirname, '../dist') }],
    }),
  ],
  resolve: {
    extensions: ['.vue', '.js', '.md', '.ts'],
    modules: ['node_modules', 'markdown-vue-loader'],
    alias: {
      '@': resolve('../src'),
    },
  },
  resolveLoader: {
    alias: {
      'markdown-vue-loader': resolvePath('../markdown-vue-loader/lib/index.js'),
    },
  },
  devtool: 'inline-source-map',
  devServer: {
    stats: 'minimal',
    contentBase: __dirname,
  },
  mode: 'development',
}
