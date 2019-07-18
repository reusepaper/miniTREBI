<template>
  <div>
    <LoadingPage></LoadingPage>
  </div>
</template>

<script>
import LoadingPage from "../components/LoadingPage";
export default {
  components: {
    LoadingPage
  },
  mounted: function() {
    auth.onAuthStateChanged((user) => {
      if(user) {
        this.$store.commit("setUser", user);
        this.$store.commit("setProfileImage", user.photoURL);
        history.go(-1);
      }
    });
  },
};
</script>
