/*
 * @Author: atdow
 * @Date: 2021-06-17 10:31:50
 * @LastEditors: null
 * @LastEditTime: 2022-04-01 18:59:18
 * @Description: file description
 */
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import packagesJson from "@/packages/packages.json";
function componentRequire(name, packagesJson) {
  const type = packagesJson[name].type
  return (r) =>
    require.ensure(
      [],
      () => type === 'vue' ? r(require(`../examples/${name}-example/index.vue`)) : r(require(`../examples/${name}-example/index.md`)),
      "zh-CN"
    );
}
function generateRoute(packagesJson) {
  let route = [];
  Object.keys(packagesJson).forEach((key) => {
    route.push({
      path: `/${key}`,
      name: `${key}`,
      meta: {
        title: packagesJson[key].title
      },
      component: componentRequire(key, packagesJson),
      children: [],
    });
  });

  return route;
}
let route = generateRoute(packagesJson);
const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
    children: route,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
