/*
 * @Author: atdow
 * @Date: 2021-06-17 10:54:48
 * @LastEditors: null
 * @LastEditTime: 2021-06-17 10:57:59
 * @Description: file description
 */

const path = require("path");
// const webpack = require("webpack");

function resolve(dir) {
  return path.join(__dirname, dir);
}

// const publicPath = "/fic-web";

const vueConfig = {
  // publicPath: publicPath,

  chainWebpack: (config) => {
    config.resolve.alias.set("@$", resolve("src"));
  },
  productionSourceMap: false,
  lintOnSave: undefined,
  transpileDependencies: [],
};

module.exports = vueConfig;
