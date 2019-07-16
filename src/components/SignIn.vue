<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";

export default {
  data() {
    return {
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
            // this.$store.state.user = authResult
            auth.onAuthStateChanged(user => {
              this.$store.commit("setUser", user);
              this.$store.commit("setProfileImage", user.photoURL);
            });

            // this.$store.commit("setUser", id);
            window.location.reload();
            return false;
          }
        }
      });

      const axios = require("axios");
      axios.get(
        "https://us-central1-webmobile-sub2-510fa.cloudfunctions.net/login"
      );
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