<template>
  <v-card hover @click="viewPage()">
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
    title: {
      type: String
    },
    postWriter: {
      type: String
    },
    writerUid: {
      type: String
    },
    category: {
      type: String
    },
    content: {
      type: String
    },
    image: {
      type: String
    }
  },
  mounted: function() {
    const axios = require("axios");
    axios.get(
      "https://us-central1-webmobile-sub2-510fa.cloudfunctions.net/post"
    );
  },
  data() {
    return {};
  },
  methods: {
    viewPage() {
      (this.$store.state.title = this.title),
        (this.$store.state.postWriter = this.postWriter),
        (this.$store.state.writerUid = this.writerUid),
        (this.$store.state.category = this.category),
        (this.$store.state.content = this.content),
        (this.$store.state.image = this.image),
        this.$router.push("/postview");
    }
  }
};
</script>
