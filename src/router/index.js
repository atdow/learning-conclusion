/*
 * @Author: atdow
 * @Date: 2021-06-17 10:31:50
 * @LastEditors: null
 * @LastEditTime: 2022-04-17 00:59:30
 * @Description: file description
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import navConfig from '@/config/navConfig'

function componentRequire(path, type) {
  if (process.env.NODE_ENV === 'development') {
    // return (resolve) => require([`@/views/${view}`], resolve)
    return (r) =>
      require.ensure(
        [],
        () => r(type ? require(`@/${path}.${type}`) : require(`../${path}.md`)),
        () => { },
        'zh-CN'
      )
  } else {
    // 懒加载方式
    // let filePath = type ? `@/${path}.${type}` : `@/${path}.md`
    if (type) {
      return () => import(`@/${path}.${type}`) // import里面的文件路径必须是字符串（或字符串模板），不能是变量，不然无法分包
    } else {
      return () => import(`@/${path}.md`)
    }
  }
}

function generateRoute(arr) {
  const route = []
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
        })
      })
    })
  })

  return route
}
const route = generateRoute(navConfig['zh-CN'])

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
    redirect: { path: route[0].path },
    children: [
      ...route,
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  // mode: 'hash',
  routes,
})

export default router
