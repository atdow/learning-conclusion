/*
 * @Author: atdow
 * @Date: 2021-06-17 10:31:50
 * @LastEditors: null
 * @LastEditTime: 2022-04-04 16:59:32
 * @Description: file description
 */
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import navConfig from "@/config/navConfig";

function componentRequire(path, type) {
  return (r) =>
    require.ensure(
      [],
      () => r(type ? require(`../${path}.${type}`) : require(`../${path}.md`)),
      "zh-CN"
    );
}


function generateRoute(arr) {
  let route = []
  arr.forEach(arrItem => {
    arrItem.groups.forEach((groupsItem) => {
      groupsItem.list.forEach((listItem) => {
        route.push({
          path: `${listItem.path}`,
          name: `${listItem.path}`,
          meta: {
            title: listItem.title
          },
          component: componentRequire(listItem.path.slice(1), listItem.type),
          children: [],
        });
      });
    })
  })

  return route;
}
let route = generateRoute(navConfig['zh-CN']);


const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
    redirect: { path: route[0].path },
    children: [
      ...route,
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
