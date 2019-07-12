<template>
  <div>
    <div class="filebox" v-if="!image">
      <label for="uploadFile">파일 선택</label>
      <input type="file" @change="onFileChange" id="uploadFile" />
    </div>
    <div v-else>
      <img :src="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImgUpLoad",
  data() {
    return {
      image: ""
    };
  },
  methods: {
    removeImage() {
      this.image = "";
    },
    onFileChange(e) {
      // file 세팅
      let files = e.target.files || e.dataTransfer.files;
      console.log(files);
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
          console.log(this.image);
          this.$emit("upLoadImg", this.image);
        })
        .catch();
    }
  }
};
</script>

<style>
</style>
