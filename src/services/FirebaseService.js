import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const POSTS = "Posts";
const USERS = "Users";
const TODO = "ToDo";
export default {
  getPosts() {
    const postsCollection = firestore.collection(POSTS);
    return postsCollection.get().then(docSnapshots => {
      return docSnapshots.docs.map(doc => {
        let data = doc.data();
        return data;
      });
    });
  },
  postPost(title, postWriter, writerUid, category, content, image) {
    return firestore.collection(POSTS).add({
      title,
      postWriter,
      writerUid,
      category,
      content,
      image
    });
  },
  getPostsByCategoryId(category, uid) {
    return firestore
      .collection(POSTS)
      .where("writerUid", "==", uid)
      .where("category", "==", category)
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          // console.log(data);
          return data;
        });
      });
  },
  getPostsByCategory(category) {
    return firestore
      .collection(POSTS)
      .where("category", "==", category)
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          // console.log(data);
          return data;
        });
      });
  },
  getPostsById(uid) {
    return firestore
      .collection(POSTS)
      .where("writerUid", "==", uid)
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          return data;
        });
      });
  },
  getUsers() {
    const usersList = firestore.collection(USERS);
    return usersList.get().then(docSnapshots => {
      return docSnapshots.docs.map(doc => {
        let data = doc.data();
        return data;
      });
    });
  },
  createUser(uid, nickname, eamil, level, createdAt) {
    return firestore.collection(USERS).add({
      uid,
      nickname,
      eamil,
      level,
      createdAt,
    });
  },
  getToDo() {
    const postsCollection = firestore.collection(TODO);
    return postsCollection.get().then(docSnapshots => {
      return docSnapshots.docs.map(doc => {
        let data = doc.data();
        return data;
      });
    });
  },
  createToDo(completed, item) {
    return firestore.collection(TODO).add({
      completed,
      item
    });
  }
};
