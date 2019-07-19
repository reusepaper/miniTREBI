<template>
  <!-- <v-jumbotron :gradient="gradient" src dark> -->
  <v-responsive v-bind:style="{ 'background-image': 'url(' + image + ')'  }">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <div class="content">
            <h3 class="display-3">Team TREBI</h3>
            <span class="subheading">2반 연지 주호 단비 만섭 동관</span>
          </div>
          <!-- <v-menu :close-on-content-click="false" :nudge-width="200" v-model="menu" offset-x>
            <span slot="activator" class="subheading">동관</span>
            <v-card>
              <v-list>
                <v-list-tile avatar>
                  <v-list-tile-avatar>
                    <img src="/static/doc-images/john.jpg" alt="YDK" />
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>유동관</v-list-tile-title>
                    <v-list-tile-sub-title>팀 트레비 2조</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                      <v-icon>favorite</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
              <v-divider></v-divider>
              <v-list>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-switch v-model="message" color="purple"></v-switch>
                  </v-list-tile-action>
                  <v-list-tile-title>Enable messages</v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-switch v-model="hints" color="purple"></v-switch>
                  </v-list-tile-action>
                  <v-list-tile-title>Enable hints</v-list-tile-title>
                </v-list-tile>
              </v-list>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat @click="menu = false">Cancel</v-btn>
                <v-btn color="primary" flat @click="menu = false">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>-->
          <v-divider class="my-3"></v-divider>
          <!-- <div class="title mb-3">{{content_msg}}</div> -->
          <br />
          <v-btn @click="random()" color="primary" class="mx-0">랜덤이미지</v-btn>
          <v-btn v-if="isLogin" @click="userphoto()" color="primary" class="mx-0">지정이미지</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-responsive>
</template>

<script>
export default {
  data: () => ({
    gradient: "to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)",
    fav: true,
    menu: false,
    message: false,
    hints: true,
    content_msg: "안녕하세요, 2조 트레비입니다. :)",
    image: "https://source.unsplash.com/random/1600x900",
    isLogin: false
  }),
  mounted: function() {
    if (this.$store.state.user) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
  methods: {
    random: function() {
      let random_id = Math.floor(Math.random() * 1000) + 1;
      this.image = `https://picsum.photos/id/${random_id}/1000/400`;
      console.log(this.image);
    },
    userphoto: function() {
      this.image = this.$store.state.user.photoURL;
    }
  }
};
</script>
<style>
.content {
  background: rgb(0, 0, 0); /* Fallback color */
  background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
  color: #f1f1f1; /* Grey text */
  width: 100%; /* Full width */
  padding: 20px; /* Some padding */
}
</style>