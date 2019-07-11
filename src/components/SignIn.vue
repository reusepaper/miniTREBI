<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script>
export default {
  data() {
    return {
      currentUser: {
        uid: "",
        email: "",
        username: ""
      }
    };
  },
  methods: {
    initUI: function() {
      ui.start("#firebaseui-auth-container", {
        signInoptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          {
            provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            scopes: [
              'public_profile',
              'email',
            ],
            customParameters: {
              // Forces password re-entry.
              auth_type: 'reauthenticate'
            }
          },
        ],
        // Required to enable one-tap sign-up credential helper.
        credentialHelper: [firebaseui.auth.CredentialHelper.NONE],
        callbacks: {
          signInSuccessWithAuthResult: (authResult, redirectUrl) => {
            this.currentUser.uid = authResult.user.uid;
            this.currentUser.email = authResult.user.email;
            this.currentUser.username = authResult.user.displayName;
            window.location.assign('/');
            return false;
          }
        }
      });
      
    // this.$router.push('/');
    },
    redirect() {
      const {search} = window.location
      if (search==='') {
      this.$router.push('/')
      } else {
      const tokens = search.replace(/^\?/, '').split('&')
      // const {returnPath} = tokens.reduce((qs, tkn) => {
      //   const pair = tkn.split('=')
      //   qs[pair[0]] = decodeURIComponent(pair[1])
      //   return qs
      // }, {})
      const {returnPath} = '/'
      this.$router.push('/')
      }
    }
  },
  mounted: function() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.currentUser.uid = user.uid;
        this.currentUser.email = user.email;
        this.currentUser.username = user.displayName;
      }
      // console.log(user)
      this.initUI();
    });
  }
};
</script>

<style>
</style>