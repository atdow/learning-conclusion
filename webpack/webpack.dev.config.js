/*
 * @Author: atdow
 * @Date: 2023-10-04 17:05:10
 * @LastEditors: null
 * @LastEditTime: 2023-10-04 17:28:05
 * @Description: file description
 */
const { merge } = require('webpack-merge')
const baseConf = require('./webpack.base.config')
const webpack = require('webpack')

module.exports = merge(baseConf, {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('development'),
    }),
  ],
})
