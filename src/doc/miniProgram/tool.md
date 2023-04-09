## 1. 全局引入路径

封装：

```js
// app.js
App({
  require: function($uri) {
    return require($uri);
  }
})
```

使用：

```js
// page.js
const app = getApp();
const utils = app.require('utils/util');
```

## 2. 路由跳转工具函数封装
引用：
```js
// app.js
const routerUtils = require("/utils/routerUtils.js");
App({
  routerUtils
})
```

封装：
```js
// routerUtils.js

/**
 * 对wx.navigateTo一层封装，类似vue-router的用法
 * @param {*} params
 */
function navigateTo(params = { url: "", query: {} }) {
  const { url = "", query = {} } = params;
  wx.navigateTo({
    url: urlIntegrateQuery(url,query),
  });
}
  
function redirectTo(params = { url: "", query: {} }) {
  const { url = "", query = {} } = params;
  wx.redirectTo({
    url: urlIntegrateQuery(url,query),
  });
}

function urlIntegrateQuery(url="",query={}){
  let newUrl = url;
  let urlParams = "";
  Object.keys(query).forEach((key) => {
    // 过滤空值
    if (query[key] || query[key] === 0) {
    urlParams += `${key}=${query[key]}&`;
    }
  });
  if (urlParams) {
    urlParams = urlParams.slice(0, -1);
    newUrl = newUrl + "?" + urlParams;
  }
  return newUrl
}

module.exports = {
  navigateTo: navigateTo,
  redirectTo: redirectTo,
};
```

使用：
```js
// page.js
app.routerUtils.navigateTo({url:'xxx', query:{}})
```