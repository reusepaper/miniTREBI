<template>
<v-container>
  <v-text-field v-model="title" label="제목"></v-text-field>
  <div id="md-editor">
    <markdown-editor v-model="content" ref="markdownEditor" label="내용"></markdown-editor>
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
import markdownEditor from 'vue-simplemde/src/markdown-editor'
import FirebaseService from "@/services/FirebaseService";

export default {
  name: "WMCreatePost",
  components: {
    markdownEditor
  },
  data() {
    return {
      title: '',
      content: '',
      image: '',
      configs: {
        spellChecker: false // disable spell check
      }
    }
  },
  methods: {
    goHome: function() {
      alert('저장할게요!');
      location.replace('/');
    },
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
    }
  }
}
</script>

<style>
@import '~simplemde/dist/simplemde.min.css';

#md-editor {
  padding: 1rem;
}

#createButton {
  background-color: white;
  color: black;
  border: 1px solid pink;
  border-radius: 15%;
  padding: 0.7rem;
  margin-left: 10px;
  z-index: 99;
}
</style>
