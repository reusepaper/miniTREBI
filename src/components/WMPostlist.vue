<template>
  <v-layout mt-5 wrap>
    <v-flex v-for="i in posts.length > limits ? limits : posts.length" xs12 sm6 md3>
      <WMPost
        class="ma-3"
        :title="posts[i-1].title"
        :postWriter="posts[i-1].postWriter"
        :content="posts[i-1].content"
        :image="posts[i-1].image"
      ></WMPost>
    </v-flex>
    <v-flex xs12 text-xs-center round my-5 v-if="loadMore">
      <v-btn v-on:click="loadMorePosts">더 보기</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import WMPost from "@/components/WMPost";
import FirebaseService from "@/services/FirebaseService";
export default {
  name: "WMPostlist",
  props: {
    limits: { type: Number, default: 4 },
    loadMore: { type: Boolean, default: false }
  },
  data() {
    return {
      posts: []
    };
  },
  components: {
    WMPost
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      if(this.$store.state.writer == "All"){
        this.posts = await FirebaseService.getPosts();
      } else {
        let allPosts = await FirebaseService.getPosts();
        for(var i = 0; i < allPosts.length; i++){
          console.log('hhh')
          if(allPosts[i].postWriter == this.$store.state.writer){
            this.posts.push(allPosts[i]);
          }
        }
      }
      // this.posts = await FirebaseService.getPosts();
      console.log(this.posts);
    },
    loadMorePosts() {
      this.limits += 4;
    }
  }
};
</script>
