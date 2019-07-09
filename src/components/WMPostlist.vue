<template>
  <v-layout mt-5>
    <v-flex v-for="i in posts.length > limits ? limits : posts.length" x12 sm6 md3>
      <WMPost class="ma-3"
        :title="posts[i-1].title"
        :body="posts[i-1].content"
        :image="posts[i-1].image"
      >
      </WMPost>
    </v-flex>
  </v-layout>
</template>

<script>
import WMPost from '@/components/WMPost'
import FirebaseService from '@/services/FirebaseService'

export default {
  name: 'WMPostlist',
  props: {
    limits: {type: Number, default: 10}
  },
  data() {
    return {
      posts:[]
    }
  },
  components: {
    WMPost
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    async getPosts(){
      this.posts = await FirebaseService.getPosts()
    }
  }
}

</script>
