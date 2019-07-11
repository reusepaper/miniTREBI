<template>
  <v-card hover to="/postview">
    <v-img :src="image" height="200px"></v-img>
    <v-card-title primary-title>
      <div>
        <div>{{ title }}</div>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "WMPost",
  props: {
    title: { type: String },
    content: { type: String },
    image: { type: String },
    writer: { type: String }
  },
  mounted: function() {
    const axios = require("axios");
    axios.get(
      "https://us-central1-webmobile-sub2-510fa.cloudfunctions.net/post"
    );
  },
  data() {
    return {};
  }
};
</script>
