/*
 * @Author: atdow
 * @Date: 2021-06-17 10:31:50
 * @LastEditors: null
 * @LastEditTime: 2021-06-18 18:29:43
 * @Description: file description
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuebar from "vuebar";
Vue.use(Vuebar);
import "./style/global.less";
import "prismjs/themes/prism.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
