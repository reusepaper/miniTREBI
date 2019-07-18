<template>
  <!-- <v-container>
  <v-text-field v-model="title" label="제목" outline></v-text-field>-->
  <div>
    <p>
      <label class="w3-text-blue">
        <b>TITLE</b>
      </label>
      <input class="w3-input w3-border" name="last" type="text" v-model="title" />
    </p>
    <p>
      <label class="w3-text-blue">
        <b>Category</b>
      </label>
      <v-layout wrap align-center>
        <v-flex xs12 sm6 d-flex>
          <v-select v-model="category" :items="categories" label="Solo field" solo></v-select>
        </v-flex>
      </v-layout>
    </p>
    <div class="container">
      <textarea class="md-text" rows="10" v-model="content"></textarea>
      <markdown-it-vue class="md-body" :content="content" :options="options"></markdown-it-vue>
    </div>

    <ImgUpLoad v-on:upLoadImg="upLoadImg"></ImgUpLoad>
    <img :src="image" />
    <div>
      <br />
      <button class="button buttonblue" v-on:click="submit()">등록</button>
    </div>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import MarkdownItVue from "../../markdownsrc/markdown-it-vue";
import ImgUpLoad from "./ImgUpLoad";
export default {
  name: "WMCreatePost",
  components: {
    MarkdownItVue,
    ImgUpLoad
  },
  data() {
    return {
      title: "",
      postWriter: "",
      writerUid: "",
      category: "",
      content: "# 이곳에 게시글을 작성해보세요! 8-)",
      image: "",
      configs: {
        spellChecker: false // disable spell check
      },
      options: {
        markdownIt: {
          linkify: true
        },
        linkAttributes: {
          target: "_blank",
          rel: "noopener"
        }
      },
      categories: this.$store.state.categories,
      category: 0
    };
  },
  mounted: function() {
    if (this.$store.state.user == null) {
      alert("로그인이 필요합니다.");
      window.location.assign("/");
    } else {
      this.postWriter = this.$store.state.user.displayName;
      this.writerUid = this.$store.state.user.uid;
    }
  },
  methods: {
    submit() {
      if (this.title == "") {
        alert("제목을 입력하세요");
      } else if (this.content == "") {
        alert("내용을 입력하세요");
      } else if (this.category == 0) {
        alert("카테고리를 입력하세요");
      } else {
        FirebaseService.postPost(
          this.title,
          this.postWriter,
          this.writerUid,
          this.category,
          this.content,
          this.image
        );
        alert("업로드 되었습니다");
        this.title = "";
        this.postWriter = "";
        this.writerUid = "";
        (this.category = ""), (this.image = "");
        this.content = "";
        history.go(-1);
        // window.location.assign("/postlist");
      }
    },
    removeImage() {
      this.image = "";
    },
    upLoadImg(image) {
      console.log("업로드 : ", image);
      this.image = image;
    }
    // onFileChange(e) {
    //   // file 세팅
    //   let files = e.target.files || e.dataTransfer.files;
    //   if (!files.length) {
    //     return;
    //   }
    //   const apiUrl = "https://api.imgur.com/3/image";
    //   const apiKey = "5139c8830e24c39";

    //   let data = new FormData();
    //   let content = {
    //     method: "POST",
    //     headers: {
    //       Authorization: "Client-ID " + apiKey,
    //       Accept: "application/json"
    //     },
    //     body: data,
    //     mimeType: "multipart/form-data"
    //   };

    //   data.append("image", files[0]);

    //   fetch(apiUrl, content)
    //     .then(response => response.json())
    //     .then(success => {
    //       this.image = success.data.link;
    //     })
    //     .catch();
    // }
  }
};
</script>

<style scoped>
.container {
  display: inline-flex;
  width: 100%;
}

.md-text {
  width: 50%;
  height: 500px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 2px;
  resize: none;
}

.md-body {
  width: 50%;
  margin-left: 20px;
}

.button {
  background-color: #92c5ff;
  border: none;
  border-radius: 2px;
  color: white;
  padding: 8px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
}

.buttonblue {
  background-color: white;
  color: black;
  border: 2px solid #92c5ff;
}

.buttonblue:hover {
  background-color: #92c5ff;
  color: white;
}
</style>
