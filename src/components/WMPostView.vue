<template>
  <div>
    <p>
      <input class="w3-input w3-border" name="last" type="text" :title="this.$store.state.title" readonly>
    </p>
    <div v-if="this.$store.state.image === ''">

    </div>
    <div v-else>
      <img :src="image" />
    </div>
    <div class="container">
      <markdown-it-vue class="md-body" :content="this.$store.state.content" :options="options"></markdown-it-vue>
    </div>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import MarkdownItVue from '../../markdownsrc/markdown-it-vue'

export default {
  name: "WMPostView",
  components: {
    MarkdownItVue
  }
}

</script>

<style scoped>
.container {
  display: inline-flex;
  width: 100%;
}

.md-body {
  width: 50%;
  margin-left: 20px;
}

</style>
