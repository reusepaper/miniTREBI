import Vue from "vue";
import Vuetify from "vuetify";
import VueSimplemde from "vue-simplemde";
import "simplemde/dist/simplemde.min.css";

import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import browserDetect from "vue-browser-detect-plugin";
import BackToTop from "vue-backtotop";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
Vue.use(BackToTop);
Vue.use(browserDetect);
Vue.config.productionTip = false;

Vue.use(Vuetify);

Vue.use(VueSimplemde);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
