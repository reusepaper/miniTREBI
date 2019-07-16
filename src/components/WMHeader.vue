<template>
  <v-container>
    <v-toolbar fixed color="primary lighten-3">
      <v-btn flat icon to="/" color="white" @click="homelog">
        <v-icon>home</v-icon>
      </v-btn>
      <v-toolbar-title class="white--text">TREBI</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <div id="google_translate_element"></div>
      </v-toolbar-items>

      <!-- sdfsdfsdfsdfsd-->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" flat color="white">Writer</v-btn>
        </template>
        <v-list>
          <v-list-tile
            v-for="(item, index) in items"
            :key="index"
            @click="selectWriter(item.title)"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-toolbar-items class="hidden-xs-only">
        <!-- 로그인 다이얼로그 활성화 -->
        <v-btn flat color="white" v-if="isLogin" @click="logout">Logout</v-btn>
        <v-btn flat color="white" v-else @click.stop="login_btn = true">Login</v-btn>
        <v-dialog v-model="login_btn" max-width="290">
          <v-card>
            <v-card-title class="headline">Log in</v-card-title>
            <v-card-text>
              <SignIn></SignIn>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-toolbar-items>
      <v-toolbar-side-icon class="hidden-sm-and-up white--text" @click="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
  </v-container>
</template>

<script>
import SignIn from "./SignIn";
export default {
  components: {
    SignIn
  },
  name: "WMHeader",
  data: () => ({
    items: [
      { title: "All" },
      { title: "Ho" },
      { title: "ydk" },
      { title: "연지" },
      { title: "한만섭" },
      { title: "한단비" }
    ],
    dialog: false,
    login_btn: false,
    isLogin: false
  }),
  methods: {
    showLoginDialog: function() {},
    logout: function() {
      const axios = require("axios");
      axios.get(
        "https://us-central1-webmobile-sub2-510fa.cloudfunctions.net/logout"
      );
      this.currentUser = {
        uid: "",
        email: "",
        displayName: ""
      };
      this.isLogin = false;
      this.$store.commit("setUser", null);
      this.$store.commit(
        "setProfileImage",
        "https://scontent-nrt1-1.cdninstagram.com/vp/14e487ffcb73b4d07dd6cf3dd7688afb/5DA39AF1/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com"
      );
      auth.signOut();
    },
    selectWriter: function(s_writer) {
      console.log(s_writer);
      this.$store.state.writer = s_writer;
      // this.$store.commit('setWriter', s_writer);
      this.$router.push(`/postlist-${s_writer}`);
    },

    homelog: function() {
      const axios = require("axios");
      axios.get(
        "https://us-central1-webmobile-sub2-510fa.cloudfunctions.net/home"
      );
    }
  },
  mounted: function() {
    if (this.$store.state.user) this.isLogin = true;
    else this.isLogin = false;
    console.log(this.$store.state.user);
  }
};
</script>

<style>
#google_translate_element {
  display: flex;
  align-items: center;
}
</style>
