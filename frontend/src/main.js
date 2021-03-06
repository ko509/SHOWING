/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import "./registerServiceWorker";
import { BootstrapVue, IconsPlugin, BadgePlugin } from "bootstrap-vue";
import ReadMore from "vue-read-more";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import store from "./store/index.js";

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(ReadMore);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BadgePlugin);
Vue.use(Toast, {
  maxToasts: 5,
  timeout: 2000,
  hideProgressBar: true,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
