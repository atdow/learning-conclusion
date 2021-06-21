/*
 * @Author: atdow
 * @Date: 2021-06-17 10:31:50
 * @LastEditors: null
 * @LastEditTime: 2021-06-21 16:51:24
 * @Description: file description
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuebar from "vuebar";
Vue.use(Vuebar);
import "./style/global.less";
import "prismjs/themes/prism.css";
// import "prismjs/themes/prism-coy.css";
// import "prismjs/themes/prism-dark.css";
// import "prismjs/themes/prism-funky.css";
// import "prismjs/themes/prism-okaidia.css";
// import "prismjs/themes/prism-solarizedlight.css";
// import "prismjs/themes/prism-tomorrow.css";
// import "prismjs/themes/prism-twilight.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
