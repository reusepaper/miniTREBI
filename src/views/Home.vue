<template>
  <v-layout>
    <v-flex>
      <div>
        <v-container class="content-main">
          <v-layout>
            <v-flex xs12>
              <!--jumbotron page 호출! -->
              <Banner></Banner>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs12>
              <!-- 프로필 띄워주는 컴포넌트 호출 -->
              <h2 class="headline my-5 text-xs-center">Show Profile</h2>
              <PFShow></PFShow>
            </v-flex>
          </v-layout>
          <v-layout class="mobile-hidden">
            <v-flex xs12>
              <!-- Gitlab Graph 컴포넌트 호출  -->
              <h2 class="headline my-5 text-xs-center">Gitlab Graph</h2>
              <GitlabGraph></GitlabGraph>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs12>
              <!-- Gitlab Repo 컴포넌트 호출  -->
              <h2 class="headline my-5 text-xs-center">Gitlab Repo</h2>
              <WMRepoList></WMRepoList>
            </v-flex>
          </v-layout>
          <!-- 우리에게 연락하고 싶다면 -->
          <!-- <v-layout>
            <v-flex xs12>
              <h2 class="headline my-5 text-xs-center">Contact Us</h2>
              <ContactUs></ContactUs>
            </v-flex>
          </v-layout>-->
          <v-layout>
            <v-flex xs12>
              <!-- 우리가 하는 일 추가하기 -->
              <h2 class="headline my-5 text-xs-center">What we do</h2>
              <Todo></Todo>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
// import WMSidebar from "../components/WMSidebar";
import Banner from "../components/Banner";
import PFShow from "../components/PFShow";
import GitlabGraph from "../components/GitlabGraph";
import WMRepoList from "../components/WMRepoList";
import Todo from "../components/todoComponents/Todo";
export default {
  components: {
    // WMSidebar,
    Banner,
    PFShow,
    GitlabGraph,
    WMRepoList,
    Todo
  },
  mounted: function() {
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
.mobile-hidden {
  display: block;
}
@media (max-width: 768px) {
  .mobile-hidden {
    display: none;
  }
}
</style>
