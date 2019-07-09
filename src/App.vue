<template>
  <v-app>
    <v-content>
      <Header></Header>
      <router-view />
      <back-to-top text="Back to top">
        <button
          type="button"
          class="v-btn v-btn--bottom v-btn--floating v-btn--fixed v-btn--right theme--dark red"
        >
          <i aria-hidden="true" class="v-icon material-icons theme--dark">keyboard_arrow_up</i>
        </button>
      </back-to-top>
      <Footer></Footer>
    </v-content>
  </v-app>
</template>

<script>
import store from "./store";
import Header from "./components/WMHeader";
import Footer from "./components/WMFooter";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
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
