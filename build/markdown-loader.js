/*
 * @Author: atdow
 * @Date: 2021-06-18 17:49:37
 * @LastEditors: null
 * @LastEditTime: 2021-06-18 18:15:26
 * @Description: file description
 */
const HyperDown = require("hyperdown");
const Prism = require("prismjs");

function markdownLoader(val) {
  let parser = new HyperDown();
  let html = parser.makeHtml(val);
  html = html.replace(
    /(?<=<pre><code[^>]*?>)[\s\S]*?(?=<\/code><\/pre>)/gi,
    (v) => {
      v = v
        .replace(/_&/g, " ")
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&");
      return Prism.highlight(v, Prism.languages.javascript);
    }
  );
  // 解析slot转换为正常标签
  html = html.replace(/&lt;slot[\s\S]*?&gt;&lt;\/slot&gt;/gi, (v) => {
    v = v
      .replace(/_&/g, " ")
      .replace(/&quot;/g, '"')
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&");
    return v;
  });
  return `<template><div class="markdown">${html}</div></template>`;
}

module.exports = markdownLoader;
