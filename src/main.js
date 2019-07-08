import Vue from "vue";
import Vuetify from "vuetify";
import VueSimplemde from "vue-simplemde";
import "simplemde/dist/simplemde.min.css";

import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueGeolocation from "vue-browser-geolocation";

Vue.use(VueGeolocation);

Vue.config.productionTip = false;

Vue.use(Vuetify);

Vue.use(VueSimplemde);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
