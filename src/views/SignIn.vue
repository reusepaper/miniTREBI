<template>
  <div>
    <v-container mt-5>
      <SignIn></SignIn>
    </v-container>
  </div>
</template>

<script>
import SignIn from "../components/SignIn";
export default {
  components: {
    SignIn
  },
  mounted() {
    const axios = require("axios");
    axios.get(
      "https://us-central1-webmobile-sub2-510fa.cloudfunctions.net/signin"
    );
  }
};
</script>
