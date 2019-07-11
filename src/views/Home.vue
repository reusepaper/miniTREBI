<template>
  <v-layout>
    <v-flex>
      <div>
        <v-container class="content-main">
          <v-layout>
            <v-flex xs12>
              <!--jumbotron page 호출! -->
              <HJ></HJ>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs12>
              <!-- 프로필 띄워주는 컴포넌트 호출 -->
              <h2 class="headline my-5 text-xs-center">Show Profile</h2>
              <PFShow></PFShow>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12>
              <!-- Gitlab Graph 컴포넌트 호출  -->
              <h2 class="headline my-5 text-xs-center">Gitlab Graph</h2>
              <GitlabGraph></GitlabGraph>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs12>
              <!-- 우리에게 연락하고 싶다면 -->
              <h2 class="headline my-5 text-xs-center">Contact Us</h2>
              <ContactUs></ContactUs>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import HelloWorld from "../components/HelloWorld";
// import WMSidebar from "../components/WMSidebar";
import HJ from "../components/HJ";
import PFShow from "../components/PFShow";
import ContactUs from "../components/ContactUs";
import GitlabGraph from "../components/GitlabGraph";
export default {
  components: {
    HelloWorld,
    // WMSidebar,
    HJ,
    PFShow,
    ContactUs,
    GitlabGraph
  },
  mounted() {
    const axios = require("axios");
    axios.get(
      "https://us-central1-webmobile-sub2-510fa.cloudfunctions.net/home"
    );
  }
};
</script>
<style>
.content-main {
  margin-top: 60px;
}
</style>
