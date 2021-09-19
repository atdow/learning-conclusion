/*
 * @Author: atdow
 * @Date: 2021-06-17 10:31:50
 * @LastEditors: null
 * @LastEditTime: 2021-09-20 01:11:55
 * @Description: file description
 */
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import packagesJson from "@/packages/packages.json";
function componentRequire(name) {
  return (r) =>
    require.ensure(
      [],
      () => r(require(`../examples/${name}-example/index.vue`)),
      "zh-CN"
    );
}
function generateroute(packagesJson) {
  let route = [];
  Object.keys(packagesJson).forEach((key) => {
    route.push({
      path: `/${key}`,
      name: `${key}`,
      component: componentRequire(key),
      children: [],
    });
  });

  return route;
}
let route = generateroute(packagesJson);
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
