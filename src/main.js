import Vue from "vue";
import Vuetify from "vuetify";
import VueSimplemde from "vue-simplemde";
import "simplemde/dist/simplemde.min.css";

import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/firebase-functions";
import "firebase/storage";

import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import browserDetect from "vue-browser-detect-plugin";
import BackToTop from "vue-backtotop";
import axios from "axios";
import VueAxios from "vue-axios";
import * as VueGoogleMaps from "vue2-google-maps";
import VuePullRefresh from "vue-pull-refresh";

Vue.use(VueAxios, axios);
Vue.use(BackToTop);
Vue.use(browserDetect);
Vue.use(firebase);
Vue.config.productionTip = false;

Vue.use(Vuetify);

Vue.use(VueSimplemde);

Vue.use(VueGoogleMaps, {
  load: {
    key: "REPLACE-THIS-WITH-YOUR-KEY-FROM-ABOVE",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  router,
  store,
  components: {
    "vue-pull-refresh": VuePullRefresh
  },
  data: function() {
    return {};
  },
  methods: {
    onRefresh: function() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve();
        }, 1000);
      });
    }
  },
  template: '<vue-pull-refresh :on-refresh="onRefresh"></vue-pull-refresh>',
  render: h => h(App)
}).$mount("#app");
