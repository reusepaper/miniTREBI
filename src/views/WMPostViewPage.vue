<template>
  <v-container mt-5>
    <v-layout>
      <WMPostView></WMPostView>
    </v-layout>
  </v-container>
</template>

<script>
import WMPostView from "../components/WMPostView";

export default {
  name: "WMPostView",
  components: {
    WMPostView
  }
}
</script>
