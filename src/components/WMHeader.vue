<template>
  <nav class="navbar shadow fixed-top navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.svg" width="30" height="30" class="d-inline-block align-top" alt />
      TREVI
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            Home
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a
            href="#"
            class="nav-link hi"
            title="즐겨찾기 등록"
            onclick="alert('ctrl+d버튼을 눌러 저장할 수 있습니다.')"
          >
            <img src="../assets/bookmark-black-shape.svg" style="width:10px;" />
          </a>
        </li>
      </ul>
      <span class="navbar-text">Navbar text with an inline element</span>
    </div>
    <div style="position: relative;">
      <v-toolbar fixed dense>
        <v-btn flat icon>
          <v-icon>home</v-icon>
        </v-btn>
        <v-toolbar-title>TREVI</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn flat v-if="isLogin" @click.stop="dialog = true">LOGOUT</v-btn>
          <v-btn flat @click.stop="dialog = true">LOGIN</v-btn>

          <v-dialog v-model="dialog" max-width="290">
            <v-card>
              <v-card-title class="headline">Log in</v-card-title>

              <v-card-text>
                <SignIn></SignIn>
                <!-- SignIn template -->
              </v-card-text>
            </v-card>
          </v-dialog>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" flat>Writer</v-btn>
            </template>
            <v-list>
              <v-list-tile v-for="(item, index) in items" :key="index" @click>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
          <v-btn flat>Search</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
  </nav>
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
    dialog: false
  }),
  mounted: function() {
    console.log(sessionStorage["length"]);
    let isLogin = sessionStorage["length"];
  }
};
</script>
