## 1. 动态routes引入组件中的路径问题

错误的使用方式：

```js
// 动态生成routes
let route = []
let dynamicPath = '/pages/list'
route.push({
    path: "path",
    name: "name",
    meta: {
        title: 'title'
    },
    component: componentRequire(dynamicPath, 'vue'), // 这里是导致错误的原因
    children: [],
});
// 动态引入组件
function componentRequire(path, type) {
    return (r) =>
        require.ensure(
            [],
            () => r(require(`..${path}.${type}`)), // ../pages/list.vue
            "zh-CN"
        );
}
const routes = [{
    path: "/",
    name: "Home",
    component: () => import( /* webpackChunkName: "home" */ "../views/home/index.vue"),
    children: route,
}];
```

在 `componentRequire` 函数最终引入的文件路径将会是 `../pages/list.vue` ，看似很完美，但是在 `require` 使用变量路径的时候不能使用 `.. + /xxx/xxx` 的方式，只能是，也就是变量不能是以 `/` 开头的，变量后面可以带有 `/` 。正确的使用方式是 `../ + xxx/xxx` 。但是我们动态配置的 `path` 一般是以 `/` 开头的，这样可以与url统一。

正确的使用方式如下：

```js
// 动态生成routes
let route = []
let dynamicPath = '/pages/list'
route.push({
    path: "path",
    name: "name",
    meta: {
        title: 'title'
    },
    component: componentRequire(dynamicPath.slice(1), 'vue'), // 将最前面的/给截取掉，然后修改componentRequire的引入方式
    children: [],
});
// 动态引入组件
function componentRequire(path, type) {
    return (r) =>
        require.ensure(
            [],
            () => r(require(`../${path}.${type}`)), // ../pages/list.vue 在这里补上路径
            "zh-CN"
        );
}
const routes = [{
    path: "/",
    name: "Home",
    component: () => import( /* webpackChunkName: "home" */ "../views/home/index.vue"),
    children: route,
}];
```

虽然看起来区别不大，只是在传入 `componentRequire` 之前的 `dynamicPath` 先截取掉最前面的 `/` ，然后在 `require` 的时候再补上 `/` ，但是这样可以解决 `webpack` 的动态引入问题。
