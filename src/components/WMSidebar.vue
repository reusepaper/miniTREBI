<template>
  <v-navigation-drawer id="wm_sidebar" v-model="drawer" :mini-variant.sync="mini" stateless fixed>
    <v-toolbar flat class="transparent">
      <v-list class="pa-0 pb-5 mt-5">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img v-if="this.$store.state.user === null" :src="this.$store.state.defaultImage" />
            <img v-if="this.$store.state.user !== null" :src="this.$store.state.user.photoURL" />
          </v-list-tile-avatar>

          <v-list-tile-content class="sidebar-title">
            <v-list-tile-title>{{this.$store.state.user === null ? "guest" : this.$store.state.user.displayName}}님 환영합니다.</v-list-tile-title>
            <v-list-tile-sub-title>
              <button
                id="createButton"
                v-if="username !== 'guest'"
                @click="$router.push('/create')"
              >글쓰기!</button>
              <button id="editProfileBtn" v-if="username !== 'guest'" @click="editProfile">프로필 수정</button>
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

      <v-list-tile v-for="item in items" :key="item.title" @click="categoryClick(item.title)">
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
import FirebaseService from "@/services/FirebaseService";

export default {
  data() {
    return {
      drawer: true,
      items: this.$store.state.items,
      mini: true,
      right: null,
      isLogin: false,
      username:
        this.$store.state.user !== null
          ? this.$store.state.user.displayName
          : "guest",
      profileImage:
        this.$store.state.user !== null
          ? this.$store.state.user.photoURL
          : this.$store.state.defaultImage
    };
  },
  methods: {
    editProfile() {
      this.$emit("editProfile");
    },
    categoryClick(title) {
      console.log(this.$route.params.pathMatch.split("/"));
      const uid = this.$store.state.writerUid;
      this.$store.commit("setSelectedCategory", title);
      this.$router.push(
        `/postlist/${this.$route.params.pathMatch.split("/")[0]}/${title}`
      );
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
  font-size: 12px;
  font-weight: 400;
  float: right;
  padding: 3px 5px;
  border: 1px solid #8ac5ff;
  border-radius: 5px;
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
