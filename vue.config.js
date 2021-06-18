/*
 * @Author: atdow
 * @Date: 2021-06-17 10:54:48
 * @LastEditors: null
 * @LastEditTime: 2021-06-18 18:35:48
 * @Description: file description
 */

const path = require("path");
// const webpack = require("webpack");

function resolve(dir) {
  return path.join(__dirname, dir);
}

// const publicPath = "";

const vueConfig = {
  // publicPath: publicPath,
  chainWebpack: (config) => {
    config.resolve.alias.set("@$", resolve("src"));
    config.module
      .rule("mdLoader")
      .test(/\.md$/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("mdLoader")
      .loader(require.resolve("./build/markdown-loader"))
      .end();
  },
  productionSourceMap: false,
  lintOnSave: undefined,
  transpileDependencies: [],
};

module.exports = vueConfig;
