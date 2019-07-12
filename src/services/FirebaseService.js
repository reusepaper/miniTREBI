import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const POSTS = 'Posts'

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
      image,
      writer
    })
  },
}
