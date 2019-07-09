<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import store from "./store";

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
