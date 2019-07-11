<template>
  <v-card>
    <v-img :src="image" height="200px"></v-img>
    <v-card-title primary-title>
      <div>
        <div>{{ title }}</div>
        <span>{{ content }}</span>
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
    image: { type: String }
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
