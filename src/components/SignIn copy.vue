<template>
  <div>
    <div id="firebaseui-auth-container"></div>
    <!-- <LoadingPage id='loader'></LoadingPage> -->
  </div>
</template>

<script>
// import LoadingPage from "../components/LoadingPage";

export default {
  data() {
    return {
      allUsers: [],
      isSignedup: false,
    };
  },
  // components: {
  //   LoadingPage
  // },
  methods: {
    initUI: function() {
      console.log("hi")
      ui.start("#firebaseui-auth-container", {
        signInSuccessUrl: '/loading',
        // signInSuccessUrl: './#',
        signInFlow: 'popup',
        signInoptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          {
            // Google provider must be enabled in Firebase Console to support one-tap
            // sign-up.
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // Required to enable this provider in one-tap sign-up.
            authMethod: "https://accounts.google.com",
            // Required to enable ID token credentials for this provider.
            // This can be obtained from the Credentials page of the Google APIs
            // console.
            clientId:
              "69251272917-2i4rh8vhu923bth3ps4rr0rmm3dfjs9k.apps.googleusercontent.com",
            
          },
          // firebase.auth.GithubAuthProvider.PROVIDER_ID,
          {
            provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            scopes: ["public_profile", "email"],
            customParameters: {
              // Forces password re-entry.
              auth_type: "reauthenticate"
            }
          }
        ],
        // Required to enable one-tap sign-up credential helper.
        credentialHelper: [firebaseui.auth.CredentialHelper.NONE],
        callbacks: {
          signInSuccessWithAuthResult: (authResult, redirectUrl) => {
            // this.$store.state.user = authResult
            auth.onAuthStateChanged(user => {
              this.$store.commit("setUser", user);
              this.$store.commit("setProfileImage", user.photoURL);
            });
            this.getUsers();
            alert("stop")
            // this.$store.commit("setUser", id);
            window.location.reload();
            // window.location.assign("/loading");
            // this.$router.push('/loading');
            return false;
          },
          // uiShown: function() {
          //   // The widget is rendered.
          //   // Hide the loader.
          //   // document.getElementById('loader');
          //    $("#loader").hide();
          // }
        }
      });

      const axios = require("axios");
      axios.get(
        "https://us-central1-webmobile-sub2-510fa.cloudfunctions.net/login"
      );
    },
    async getUsers() {
      // firebase에 저장된 정보를 allUsers에 저장.
      this.allUsers = await FirebaseService.getUsers();
      // 저장된 allUsers를 돌며, 현재 로그인 정보를 체크.
      // this.currentUser.uid 부분은 initUI의 콜백에 존재한다.
      for (let i=0; i<this.allUsers.length; i++){
        // 현재 로그인 유저의 uid와 가입된 user의 uid가 같은것이 있다면 isSignedup 변수를 true로 둔다.
        if(this.$store.state.user.uid == this.allUsers[i].uid){
          this.isSignedup = await true;
          break;
        }
      }
      // 만약 회원가입 유저(처음 로그인한 유저)라면 firebase에 uid와 username(닉네임), 기본 프로필 이미지를 '' 로 저장한다.
      if(this.$store.state.user && this.isSignedup == false){
        await FirebaseService.createUser(
          this.$store.state.user.uid,
          this.$store.state.user.displayName,
          this.$store.state.user.email,
          'guest',
          new Date(),
        );
      }
      await alert("stop")
      // await window.location.reload();
    },

  },
  mounted: function() {
    if (this.$store.state.user == null) {
      this.initUI();
    }
    const axios = require("axios");
    axios.get(
      "https://us-central1-webmobile-sub2-510fa.cloudfunctions.net/login"
    );

  }
};
</script>

<style>
</style>