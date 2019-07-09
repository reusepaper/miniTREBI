import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const POSTS = 'Posts'

var firebaseConfig = {
  apiKey: "AIzaSyCBToAXiNSn5EIUwm0AbYF3jtRJkzGQRs8",
  authDomain: "webmobile-sub2-510fa.firebaseapp.com",
  databaseURL: "https://webmobile-sub2-510fa.firebaseio.com",
  projectId: "webmobile-sub2-510fa",
  storageBucket: "",
  messagingSenderId: "69251272917",
  appId: "1:69251272917:web:e3d748f5c506995f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export default {
  getPosts(){
    const postsCollection = firestore.collection(POSTS)
    return postsCollection
      .get()
      .then((docSnapshots) => {
        return docSnapshots.docs.map((doc) => {
          let data = doc.data()
          return data
        })
      })
  },
  postPost(title, content, image) {
    return firestore.collection(POSTS).add({
      title,
      content,
      image
    })
  }
}
