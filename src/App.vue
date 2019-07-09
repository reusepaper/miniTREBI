<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import store from "./store";
// import firebase from "firebase";

// let config = {
//   apiKey: "AIzaSyCBToAXiNSn5EIUwm0AbYF3jtRJkzGQRs8",
//   authDomain: "webmobile-sub2-510fa.firebaseapp.com",
//   databaseURL: "https://webmobile-sub2-510fa.firebaseio.com",
//   projectId: "webmobile-sub2-510fa",
//   storageBucket: "",
//   messagingSenderId: "69251272917",
//   appId: "1:69251272917:web:922ef7e36db6d210"
// };
// let app = Firebase.initial

export default {
  name: "App",
  store,
  data() {
    return {
      //
    };
  },
  beforeCreate() {
    if (browser !== "Chrome") {
      alert("본 사이트는 크롬버전에 최적화되어있습니다.");
    }
  }
};
</script>
