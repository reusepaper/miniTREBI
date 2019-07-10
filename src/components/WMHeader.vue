<template>
<div class="hide-overflow" style="position: relative;">
    <v-toolbar fixed color="primary lighten-3">
      <v-btn flat icon to="/" color="white">
        <v-icon>home</v-icon>
      </v-btn>
      <v-toolbar-title class="white--text">TRAVI</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <!-- 로그인 다이얼로그 활성화 -->
        <v-btn flat color="white" v-if="currentUser" @click="logout">Logout</v-btn>
        <v-btn flat color="white" v-else @click.stop="login_btn = true">Login</v-btn>
          <v-dialog v-model="login_btn" max-width="290">
            <v-card>
              <v-card-title class="headline">Log in</v-card-title>
              <v-card-text>
                <SignIn></SignIn>
                SignIn template
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary darken-1" flat="flat" @click="login_btn = false">Disagree</v-btn>
                <v-btn color="primary darken-1" flat="flat" @click="login_btn = false">Agree</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        <v-btn to="/post" class="white--text" flat>Post</v-btn>
        <v-btn to="/portfolio" class="white--text" flat>Portfolio</v-btn>
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" flat color="white">Writer</v-btn>
          </template>
          <v-list>
            <v-list-tile v-for="(item, index) in items" :key="index" @click="">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>


        <!-- <v-dialog v-model="dialog" width="500"> -->
          <!-- <template v-slot:activator="{ on }">
            <v-btn class="white--text" flat v-on="on">
              <v-icon >star</v-icon>
            </v-btn>
          </template> -->
          <!-- <v-card>
            <v-card-title class="headline primary lighten-3 white--text">
              안내
            </v-card-title>
            <v-card-text>
              즐겨찾기에 추가하려면 Ctrl+D를 누르세요
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary lighten-3" class="white--text" @click="dialog = false">확인</v-btn>
            </v-card-actions>
          </v-card> -->
        <!-- </v-dialog> -->
      </v-toolbar-items>
      <v-toolbar-side-icon class="hidden-sm-and-up white--text" @click="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>

    <!-- <v-navigation-drawer app right disable-resize-watcher v-model="drawer" class="primary lighten-3">
      <v-list>
        <v-list-tile @click="$router.push('/post')">
          <v-list-tile-content>
            <v-list-tile-title class="white--text title">Post</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="$router.push('/portfolio')">
          <v-list-tile-content>
            <v-list-tile-title class="white--text title">Portfolio</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="$router.push('/login')">
          <v-list-tile-content>
            <v-list-tile-title class="white--text title">Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
</div>
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
      { title: "Ho" },
      { title: "ydk" },
      { title: "yeon" },
      { title: "mansub" },
      { title: "rain" }
    ],
    dialog: false,
    login_btn: false,
    currentUser: false
  }),
  methods:{
    showLoginDialog:function(){

    },
    logout: function() {
      this.currentUser = {
          uid: '',
          email: '',
          displayName: ''
      }
      auth.signOut()
    }
  },
  mounted: function(){
    console.log(sessionStorage['length'])
    let isLogin = sessionStorage['length']
    auth.onAuthStateChanged(user => {
      console.log(user)
      if (user) this.currentUser=true;
      else this.currentUser=false;
    });
  }
};
</script>
