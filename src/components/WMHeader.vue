<template>
  <v-container>
    <v-toolbar fixed color="primary lighten-3">
      <v-btn flat icon to="/" color="white" @click="homelog">
        <v-icon>home</v-icon>
      </v-btn>
      <v-toolbar-title class="white--text">TREBI</v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- 번역 -->
      <v-toolbar-items class="hidden-xs-only">
        <div id="google_translate_element"></div>
      </v-toolbar-items>

      <v-toolbar-items class="hidden-xs-only">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" flat color="white">Writer</v-btn>
          </template>
          <v-list>
            <v-list-tile
              v-for="(item, index) in items"
              :key="index"
              @click="selectWriter(item.uid, item.title)"
            >
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

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

    <v-navigation-drawer
      app
      right
      disable-resize-watcher
      v-model="drawer"
      class="hidden-sm-and-up primary lighten-3"
    >
      <v-list class="white--text">
        <v-list-group>
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Writer</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list>
            <v-list-tile
              v-for="(item, index) in items"
              :key="index"
              @click="selectWriter(item.uid, item.title)"
            >
              <v-list-tile-title class="white--text">{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
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
      {
        title: "All",
        uid: "all"
      },
      {
        title: "Ho",
        uid: "ZTYM5VCPpIbvndytDt2cwlflv6E2"
      },
      {
        title: "ydk",
        uid: "NF8MhC7OKgXylePRyVUz9Ov539l1"
      },
      {
        title: "yeon",
        uid: "zqaDXS0la7TmeUKl6aypj3dkQYQ2"
      },
      {
        title: "mansub",
        uid: "3YjEtT966mWsTcuEZzI6tUC1L423"
      },
      {
        title: "rain",
        uid: "xgc441Z24EfgMDTxhEkAuw2VaWD3"
      }
    ],
    drawer: false,
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
      window.location.reload();
    },
    selectWriter: function(uid, s_writer) {
      this.$store.commit("setWriterUid", uid);
      this.$store.commit("setSelectedCategory", "All");
      this.$router.push(`/postlist/${s_writer}`);
    },

    homelog: function() {
      location.reload();
      const axios = require("axios");
      axios.get(
        "https://us-central1-webmobile-sub2-510fa.cloudfunctions.net/home"
      );
    }
  },
  mounted: function() {
    console.log(this.$store.state.user);
    if (this.$store.state.user) this.isLogin = true;
    else this.isLogin = false;
  }
};
</script>

<style>
/* *,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0px;
}
#app {
  height: 100%;
} */
.bm-burger-button {
  position: absolute;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
}
.bm-burger-bars {
  background: #373a47;
}
.bm-morph-shape {
  fill: #373a47;
}
.bm-menu {
  background: #373a47;
  a {
    color: #b8b7ad;
    &:hover,
    &:focus {
      color: #c94e50;
    }
  }
}
#google_translate_element {
  display: flex;
  align-items: center;
}
.goog-te-gadget-simple {
  background-color: rgba(255, 255, 255, 0) !important;
  border: 1px solid rgba(255, 255, 255, 0) !important;
}
.goog-te-gadget-simple .goog-te-menu-value span {
  color: white !important;
  font-weight: bold;
}

.skiptranslate {
  top: 64px !important;
}
@media screen and (max-width: 959px) {
  .skiptranslate {
    top: 48px !important;
  }
}
@media screen and (max-width: 715px) {
  .skiptranslate {
    top: 56px !important;
  }
}
.v-menu__content.theme--light.v-menu__content--fixed {
  z-index: 99999999 !important;
}

.goog-te-banner-frame {
  /* display: none; */
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  border: none;
}
</style>
