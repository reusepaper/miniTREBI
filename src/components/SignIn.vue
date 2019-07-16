<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";

export default {
  data() {
    return {
      allUsers: [],
      isSignedup: false,
      currentUser: {
        uid: "",
        email: "",
        username: ""
      },
    };
  },
  methods: {
    initUI: function() {
      ui.start("#firebaseui-auth-container", {
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
              "69251272917-2i4rh8vhu923bth3ps4rr0rmm3dfjs9k.apps.googleusercontent.com"
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
            this.currentUser.uid = authResult.user.uid;
            this.currentUser.email = authResult.user.email;
            this.currentUser.username = authResult.user.displayName;
            // console.log(authResult.user.uid);
            // this.getUsers();
            return false;
          }
        }
        // signInSuccessUrl: '/'
      });

      const axios = require("axios");
      axios.get(
        "https://us-central1-webmobile-sub2-510fa.cloudfunctions.net/login"
      );

      // this.$router.push('/');
      
    },
    redirect() {
      const { search } = window.location;
      if (search === "") {
        this.$router.push("/");
      } else {
        const tokens = search.replace(/^\?/, "").split("&");
        // const {returnPath} = tokens.reduce((qs, tkn) => {
        //   const pair = tkn.split('=')
        //   qs[pair[0]] = decodeURIComponent(pair[1])
        //   return qs
        // }, {})
        const { returnPath } = "/";
        this.$router.push("/");
      }
    },
    // async getUsers() {
    //   // await alert("in");
    //   this.allUsers = await FirebaseService.getUsers();
    //   // await console.log(this.allUsers);
    //   // await console.log(this.allUsers[0].uid);
    //   // await alert("ok");
    //   // if(this.currentUser.uid == this.allUsers[0].uid) {
    //   //   this.isSignedup = await true;
    //   // }
    //   for (let i=0; i<this.allUsers.length; i++){
    //     if(this.currentUser.uid == this.allUsers[i].uid){
    //       this.isSignedup = await true;
    //       break;
    //     }
    //   }
    //   // await alert(this.isSignedup);
    //   if(this.isSignedup == false){
    //     await FirebaseService.createUser(
    //       this.currentUser.uid,
    //       this.currentUser.username,
    //       '',
    //     );
    //   }
    //   await window.location.reload();
    // },
  },
  mounted: function() {

    auth.onAuthStateChanged(user => {
      if (user) {
        this.currentUser.uid = user.uid;
        this.currentUser.email = user.email;
        this.currentUser.username = user.displayName;
        
      } else {
        // console.log(user)
        this.initUI();
      }

      const axios = require("axios");
      axios.get(
        "https://us-central1-webmobile-sub2-510fa.cloudfunctions.net/login"
      );
    });
  }
};
</script>

<style>
</style>