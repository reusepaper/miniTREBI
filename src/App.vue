const express=require('express');
const bodyParser = require('body-parser');
<template>
  <v-app>
    <v-content>
      <WMHeader></WMHeader>
      <router-view :key="$route.fullPath"></router-view>
      <back-to-top text="Back to top" visibleoffset="100">
        <button
          type="button"
          style="bottom:120px;"
          class="ydk v-btn v-btn--bottom v-btn--floating v-btn--fixed v-btn--right theme--dark light-blue"
        >
          <i aria-hidden="true" class="v-icon material-icons theme--dark">keyboard_arrow_up</i>
        </button>
      </back-to-top>
      <WMFooter></WMFooter>
    </v-content>
  </v-app>
</template>

<script>
import store from "./store";
import WMHeader from "./components/WMHeader";
import WMFooter from "./components/WMFooter";

export default {
  name: "App",
  components: {
    WMHeader,
    WMFooter
  },
  store,
  data() {
    return {
      //
    };
  },
  beforeCreate() {
    // eslint-disable-next-line
    var is_chrome =
      navigator.userAgent.toLowerCase().indexOf("chrome") > -1 &&
      navigator.vendor.toLowerCase().indexOf("google") > -1;
    if (is_chrome != 1) {
      alert("본 사이트는 크롬버전에 최적화되어있습니다.");
    }
  }
};
</script>
<style>
</style>
