import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    title: "",
    postWriter: "",
    content: "",
    image: "",
    profileImage:
      "https://scontent-nrt1-1.cdninstagram.com/vp/14e487ffcb73b4d07dd6cf3dd7688afb/5DA39AF1/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com",
    seePostId: ""
  },

  mutations: {
    setProfileImage(state, newImg) {
      state.profileImage = newImg;
    },
    setSeePostId(state, newId) {
      state.seePostId = newId;
    }
  },
  actions: {},
  plugins: [createPersistedState()]
});
