/*
 * @Author: atdow
 * @Date: 2021-06-17 10:31:50
 * @LastEditors: null
 * @LastEditTime: 2023-09-29 00:23:08
 * @Description: file description
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import Vuebar from 'vuebar'
Vue.use(Vuebar)
import './lazy/index'
import './style/global.less'
import './mock/index'
// import 'prismjs/themes/prism.css'

import './config/components_use'
// import "prismjs/themes/prism-coy.css";
// import "prismjs/themes/prism-dark.css";
// import "prismjs/themes/prism-funky.css";
// import "prismjs/themes/prism-okaidia.css";
// import "prismjs/themes/prism-solarizedlight.css";
// import "prismjs/themes/prism-tomorrow.css";
// import "prismjs/themes/prism-twilight.css";

router.afterEach((to, from) => {
  const { meta = {} } = to
  const title = meta.title || '常用组件'
  document.title = title
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
