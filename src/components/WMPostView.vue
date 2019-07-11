<template>
  <div>
    <p>
      <input class="w3-input w3-border" name="last" type="text" v-model="title" readonly>
    </p>


  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import MarkdownItVue from '../../markdownsrc/markdown-it-vue'

export default {
  name: "WMPostView",
  components: {
    MarkdownItVue
  },
  data() {
    return {
      title: '',
      content: '',
      image: ''
    }
  }
}

</script>

<style scoped>
.container {
  display: inline-flex;
  width: 100%;
}
</style>
