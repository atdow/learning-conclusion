/*
 * @Author: atdow
 * @Date: 2021-06-17 10:54:48
 * @LastEditors: null
 * @LastEditTime: 2022-04-13 22:12:39
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
    // config.module
    //   .use("vue-loader")
    //   .loader("vue-loader")
    //   .end()
    config.module
      .rule("mdLoader")
      .test(/\.md$/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("mdLoader")
      .loader(require.resolve("./markdown-vue-loader/lib/index.js"))
      .options({
        demoWrapperClass: 'vue-demo-wrapper',
        templateClass: 'vue-demo-container',
        descWrapperClass: 'vue-demo-desc',
        highlightClass: 'vue-demo-highlight'
      })
      .end();

  },
  productionSourceMap: false,
  lintOnSave: undefined,
  transpileDependencies: [],
};

module.exports = vueConfig;
