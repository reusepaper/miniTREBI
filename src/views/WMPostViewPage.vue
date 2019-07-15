<template>
  <v-container mt-5>
    <v-layout>
      <v-flex xs12>
        <WMPostView></WMPostView>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import WMPostView from "../components/WMPostView";

export default {
  name: "WMPostViewPage",
  components: {
    WMPostView
  },
  mounted() {
    const { id } = this.$route.params;
    this.$store.commit("setSeePostId", id);
  }
};
</script>
