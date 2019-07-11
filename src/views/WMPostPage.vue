<template>
  <div>
    <v-container mt-5>
      <v-layout>
        <v-flex xs12>
          <WMPostlist :limits="4" :load-more="true"></WMPostlist>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import WMPostlist from "../components/WMPostlist";
export default {
  name: "WMPostPage",
  components: {
    WMPostlist
  },
  mounted() {
    const axios = require("axios");
    axios.get(
      "https://us-central1-webmobile-sub2-510fa.cloudfunctions.net/post"
    );
  }
};
</script>
