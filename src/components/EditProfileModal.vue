<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">프로필 수정</slot>
          </div>

          <div class="modal-body">
            <div class="profile-img" v-bind:style="{ 'background-image': 'url(' + image + ')'  }"></div>
            <div class="profile-name">
              <input class="name-input" type="text" v-model="writer" />
            </div>
            <ImgUpLoad v-on:upLoadImg="upLoadImg"></ImgUpLoad>
          </div>

          <div class="modal-footer">
            <button class="saveBtn" @click="saveData">저장</button>
            <button class="cancelBtn modal-default-button" @click="$emit('close')">취소</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ImgUpLoad from "../components/ImgUpLoad";
import FirebaseService from "@/services/FirebaseService";

export default {
  components: {
    ImgUpLoad
  },
  data() {
    return {
      writer: "",
      image: this.$store.state.profileImage,
      currentUser: ""
    };
  },
  mounted() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.writer = user.displayName;
        this.currentUser = user;
        this.image = user.photoURL;
      }
    });
  },
  methods: {
    upLoadImg(image) {
      this.image = image;
    },
    saveData() {
      this.currentUser.updateProfile({
        photoURL: this.image,
        displayName: this.writer
      });
      this.$store.commit("setUserImage", this.image);
      this.$store.commit("setUserDisplayName", this.writer);
      this.$emit("close");
    }
  }
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile-img {
  /* border: 1px solid rgba(0, 0, 0, 0.3); */
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  border-radius: 50px;
  background-size: cover;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.modal-default-button {
  float: right;
}
.profile-name {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
.name-text {
  margin-right: 10px;
}

.saveBtn {
  margin-right: 30px;
}
.saveBtn,
.cancelBtn {
  border: 1px solid #8ac5ff;
  border-radius: 5px;
  padding: 5px 10px;
}
.name-input {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 10px 5px;
  text-align: center;
}
.name-input:focus {
  outline: none;
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-footer {
  align-self: flex-end;
}
</style>
