/*
 * @Author: atdow
 * @Date: 2023-10-04 17:05:18
 * @LastEditors: null
 * @LastEditTime: 2023-10-04 19:20:14
 * @Description: file description
 */
const { merge } = require('webpack-merge')
const baseConf = require('./webpack.base.config')
const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(baseConf, {
  mode: 'production',
  output: {
    publicPath: '/learning-conclusion/',
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('production'),
    }),
  ],
})
