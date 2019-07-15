<template>
  <v-navigation-drawer id="wm_sidebar" v-model="drawer" :mini-variant.sync="mini" stateless fixed>
    <v-toolbar flat class="transparent">
      <v-list class="pa-0 pb-5 mt-5">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img :src="profileImage" />
          </v-list-tile-avatar>

          <v-list-tile-content class="sidebar-title">
            <v-list-tile-title>
              <span id="user_name"></span>님 환영합니다!
            </v-list-tile-title>
            <v-list-tile-sub-title>
              <button id="createButton" v-if="isLogin" @click="$router.push('create')">글쓰기!</button>
              <button id="editProfileBtn" v-if="isLogin" @click="editProfile">프로필 수정</button>
            </v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0 mt-5" dense>
      <v-divider></v-divider>

      <v-list-tile v-for="item in items" :key="item.title" @click>
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      mini: true,
      right: null,
      isLogin: false,
      profileImage: ""
    };
  },
  mounted: function() {
    this.profileImage = this.$store.state.profileImage;
    const userName = document.querySelector("#user_name");
    const createPost = document.querySelector("#create_post");
    auth.onAuthStateChanged(user => {
      if (user) {
        userName.innerText = user.displayName;
        this.isLogin = true;
      } else {
        userName.innerText = "guest";
        this.isLogin = false;
      }
    });
  },
  methods: {
    editProfile() {
      this.$emit("editProfile");
    }
  }
};
</script>
<style>
#wm_sidebar {
  top: 64px;
}
@media screen and (max-width: 959px) {
  #wm_sidebar {
    top: 48px;
  }
}
@media screen and (max-width: 715px) {
  #wm_sidebar {
    top: 56px;
  }
}
#createButton,
#editProfileBtn {
  float: right;
  padding: 3px 5px;
  border: 1px solid pink;
  border-radius: 16px;
  /* padding: 3px; */
}
#createButton:hover,
#editProfileBtn:hover {
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

#createButton:focus,
#editProfileBtn:focus {
  outline: none;
}
#editProfileBtn {
  margin-right: 10px;
}
.sidebar-title {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
}
</style>