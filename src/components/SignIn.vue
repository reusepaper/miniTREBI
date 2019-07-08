<template>
    <div id="firebaseui-auth-container"></div>
</template>

<script>
  export default {
    data: {
        currentUser: {
            uid: '',
            email: '',
            username: ''
        },
    },
    methods: {
        initUI: function() {
            ui.start('#firebaseui-auth-container', {
                signInoptions: [
                    firebase.auth.EmailAuthProvider.PROVIDER_ID
                ],
                callbacks: {
                    signInSuccessWithAuthResult: (authResult, redirectUrl) => {
                        this.currentUser.uid = authResult.user.uid
                        this.currentUser.email = authResult.user.email
                        this.currentUser.username = authResult.user.displayName
                        return false
                    }
                }
            })
        }
    },
    mounted: function(){
        this.initUI()
    },
  }
</script>

<style>
</style>