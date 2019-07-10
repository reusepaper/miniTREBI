<template>
<v-container>
  <v-text-field v-model="title" label="제목" outline></v-text-field>
  <div class="container">
    <textarea class="md-text" rows="10" v-model="content"></textarea>
    <markdown-it-vue class="md-body" :content="content" :options="options"></markdown-it-vue>
  </div>
  <div v-if="!image">
    <input type="file" @change="onFileChange" />
  </div>
  <div v-else>
    <img :src="image" /><br />
  </div>
  <v-btn @click="submit">등록</v-btn>
</v-container>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import MarkdownText from './WMCreatePost'
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  name: "WMCreatePost",
  components: {
    MarkdownItVue
  },
  data() {
    return {
      title: '',
      content: '',
      image: '',
      configs: {
        spellChecker: false // disable spell check
      },
      content: MarkdownText,
      options: {
        markdownIt: {
          linkify: true
        },
        linkAttributes: {
          target: '_blank',
          rel: 'noopener'
        }
      }
    }
  },
  methods: {
    submit() {
      if (this.title == "") {
        alert("제목을 입력하세요");
      } else if (this.content == "") {
        alert("내용을 입력하세요");
      } else {
        FirebaseService.postPost(this.title, this.content, this.image);
        alert("업로드 되었습니다");
        this.title = "";
        this.image = "";
        this.content = "";
      }
    },
    removeImage() {
      this.image = "";
    },
    onFileChange(e) {
      // file 세팅
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      const apiUrl = "https://api.imgur.com/3/image";
      const apiKey = "5139c8830e24c39";

      let data = new FormData();
      let content = {
        method: "POST",
        headers: {
          Authorization: "Client-ID " + apiKey,
          Accept: "application/json"
        },
        body: data,
        mimeType: "multipart/form-data"
      };

      data.append("image", files[0]);

      fetch(apiUrl, content)
        .then(response => response.json())
        .then(success => {
          this.image = success.data.link;
        })
        .catch();
    },
    update: _.debounce(function(e) {
      this.input = e.target.value;
    }, 300)
  }
}
</script>

<style scoped>
.container {
  display: inline-flex;
  width: 100%;
}
.md-text {
 width: 47%;
}
.md-body {
  width: 50%;
  margin-left: 20px;
}
</style>
