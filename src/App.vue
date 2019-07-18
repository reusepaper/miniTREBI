<template>
  <v-app>
    <LoadingPage id="loading"></LoadingPage>
    <v-content id="page">
      <WMHeader></WMHeader>
      <router-view :key="$route.fullPath"></router-view>
      <back-to-top text="Back to top" visibleoffset="100">
        <button id="topButton" type="button" v-bind:style="styleObject">
          <i aria-hidden="true" class="v-icon material-icons theme--dark">keyboard_arrow_up</i>
        </button>
      </back-to-top>
      <WMFooter v-bind:class="{margin : this.$route.name === 'postlist'}"></WMFooter>
    </v-content>
  </v-app>
</template>

<script>
import store from "./store";
import WMHeader from "./components/WMHeader";
import WMFooter from "./components/WMFooter";
import LoadingPage from "./components/LoadingPage";

// document.addEventListener('DOMContentLoaded', function() {
//   $('#loading').hide();
// }, false);
// $(window).on("load", function() {
//   $("#loading").hide();
// });
window.onload = function() {
  $("#loading").hide();
  $("#page").show();
};

export default {
  name: "App",
  components: {
    WMHeader,
    WMFooter,
    LoadingPage
  },
  store,
  data() {
    return {
      styleObject: {
        bottom: `${window.innerHeight / 2}px`,
        position: "fixed",
        "background-color": "#b3d4fc"
      }
    };
  },
  computed: {
    style() {
      return "bottom: ${window.innerHeight / 2}px !important";
    }
  },
  mounted() {
    $("#page").hide();
    console.log(this.$route.name);
  },
  methods: {},
  created() {
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
.margin {
  margin-left: 80px;
}
</style>
