<template>
  <v-navigation-drawer
    id="wm_sidebar"
    v-model="drawer"
    :mini-variant.sync="mini"
    stateless
    fixed
    
  >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0 pb-5 mt-5" style="height: 60px">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title><span id="user_name"></span>님 환영합니다!</v-list-tile-title>
            <v-list-tile-title v-if="isLogin" @click="$router.push('create')" id="create_post_button"><button id="createButton">글쓰기!</button></v-list-tile-title>
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
      isLogin: false
    };
  },
  mounted: function() {
    const userName = document.querySelector('#user_name')
    const createPost = document.querySelector('#create_post')
    const create_post_button = document.querySelector('#create_post_button')
    auth.onAuthStateChanged(user => {
      if (user) {
        userName.innerText = user.displayName
        this.isLogin = true;
        console.log(user.displayName)

      } else{
        userName.innerText = 'guest'
        this.isLogin = false
      }
    });
  }
};

</script>
<style>
#wm_sidebar{
  top:64px;
}
@media screen and (max-width: 959px) {
  #wm_sidebar{
    top:48px;
  }
}
@media screen and (max-width: 715px) {
  #wm_sidebar{
    top:56px;
  }
}
#createButton{
  border: 1px solid pink;
  padding: 3px;
}
</style>