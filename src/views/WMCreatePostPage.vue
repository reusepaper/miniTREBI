<template>
  <div>
    <v-container mt-5>
      <WMCreatePost></WMCreatePost>
    </v-container>
  </div>
</template>

<script>
import WMCreatePost from "../components/WMCreatePost";
export default {
  components: {
    WMCreatePost
  },
  mounted() {
    const axios = require("axios");
    axios.get(
      "https://us-central1-webmobile-sub2-510fa.cloudfunctions.net/creatPost"
    );
  }
};
</script>
