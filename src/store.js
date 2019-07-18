import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    title: "",
    postWriter: "",
    writerUid: "",
    content: "",
    image: "",
    selectedCategory: "개발",
    defaultImage:
      "https://scontent-nrt1-1.cdninstagram.com/vp/14e487ffcb73b4d07dd6cf3dd7688afb/5DA39AF1/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com",
    seePostId: "",
    writer: "",
    user: null,
    categories: ["개발", "취미", "여행", "요리"],
    items: [
      { title: "개발", icon: "laptop_mac" },
      { title: "취미", icon: "camera_alt" },
      { title: "여행", icon: "tram" },
      { title: "요리", icon: "local_dining" }
    ],
    todoList:[]
  },

  mutations: {
    setProfileImage(state, newImg) {
      state.profileImage = newImg;
    },
    setSeePostId(state, newId) {
      state.seePostId = newId;
    },
    setSelectedCategory(state, newCategory) {
      state.selectedCategory = newCategory;
    },
    setUser(state, currentUser) {
      state.user = currentUser;
    },
    setUserImage(state, newImage) {
      state.user.photoURL = newImage;
    },
    setUserDisplayName(state, newName) {
      state.user.displayName = newName;
    },
    setWriterUid(state, newWriterUid) {
      state.writerUid = newWriterUid;
    },
    setTodoList(state, updateList) {
      state.todoList = updateList;
    },
    upTodoList(state, addTodo){
      state.todoList.push(addTodo);
    }
  },
  actions: {},
  plugins: [createPersistedState()]
});
