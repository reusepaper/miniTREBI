<template>
  <div style="margin: auto;">
    <p>
      <input
        class="w3-input w3-border"
        name="last"
        type="text"
        :value="this.$store.state.title"
        readonly
      />
    </p>
    <p>
      카테고리 :
      <input
        class="w3-input w3-border"
        style="display:inline; width:90%;"
        name="last"
        type="text"
        :value="this.$store.state.category"
        readonly
      />
    </p>
    <p>
      작성자 :
      <input
        class="w3-input w3-border"
        style="display:inline; width:90%;"
        name="last"
        type="text"
        :value="this.$store.state.postWriter"
        readonly
      />
    </p>
    <div v-if="this.$store.state.image === ''"></div>
    <div v-else>
      <img :src="this.$store.state.image" />
    </div>
    <div>
      <markdown-it-vue :content="content" :options="options"></markdown-it-vue>
    </div>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import MarkdownItVue from "../../markdownsrc/markdown-it-vue";

export default {
  name: "WMPostView",
  components: {
    MarkdownItVue
  },
  mounted() {
    // console.log(this.$store.state.seePostId);
  },
  data() {
    return {
      content: this.$store.state.content,
      options: {
        markdownIt: {
          linkify: true
        },
        linkAttributes: {
          target: "_blank",
          rel: "noopener"
        }
      }
    };
  }
};
</script>
