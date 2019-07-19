<template>
  <div>
    <div class="filebox">
      <label for="uploadFile">파일 선택</label>
      <input type="file" @change="onFileChange" id="uploadFile" />
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
          this.$emit("upLoadImg", this.image);
        })
        .catch();
    }
  }
};
</script>

<style>
.filebox label {
  display: inline-block;
  padding: 0.5em 0.75em;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  background-color: white;
  color: black;
  cursor: pointer;
  border: 2px solid #92c5ff;
  border-radius: 0.25em;
  -webkit-transition: background-color 0.2s;
  transition: background-color 0.2s;
}

.filebox label:hover {
  background-color: #92c5ff;
  color: white;
}

.filebox label:active {
  background-color: #92c5ff;
  color: white;
}

.filebox input[type="file"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
