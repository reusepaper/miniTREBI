import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const POSTS = 'Posts'
const USERS = 'Users'

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
  postPost(title, postWriter, content, image) {
    return firestore.collection(POSTS).add({
      title,
      postWriter,
      content,
      image,
    })
  },
  getUsers(){
    const usersList = firestore.collection(USERS)
    return usersList
    .get()
    .then((docSnapshots) => {
      return docSnapshots.docs.map((doc) => {
        let data = doc.data()
        return data
      })
    })
  },
  createUser(uid, nickname, profileImg) {
    return firestore.collection(USERS).add({
      uid,
      nickname,
      profileImg,
    })
  },
}
