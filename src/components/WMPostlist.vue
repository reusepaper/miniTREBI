<template>
  <v-layout mt-5 wrap>
    <v-flex xs12>
      <h2 class="text-xs-center">{{this.$store.state.selectedCategory}}</h2>
    </v-flex>

    <v-flex v-for="i in posts.length > limits ? limits : posts.length" xs12 sm6 md3>
      <WMPost
        class="ma-3"
        :title="posts[i-1].title"
        :postWriter="posts[i-1].postWriter"
        :writerUid="posts[i-1].writerUid"
        :category="posts[i-1].category"
        :content="posts[i-1].content"
        :image="posts[i-1].image"
      ></WMPost>
    </v-flex>
    <v-flex xs12 text-xs-center round my-5 v-if="posts.length>4 && posts.length >= limits   ">
      <v-btn v-on:click="loadMorePosts">더 보기</v-btn>
    </v-flex>
    <v-flex v-if="posts.length == 0" mt-5>
      <h2 class="text-xs-center">현재 카테고리에 작성된 글이 없습니다.</h2>
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
      posts: null,
      postCount: -1
    };
  },
  components: {
    WMPost
  },
  mounted() {
    console.log("mount UID::" + this.$store.state.writerUid);
    this.getPosts();
  },
  methods: {
    async getPosts() {
      console.log("***UID::" + this.$store.state.writerUid);
      if (this.$store.state.writerUid === "all") {
        const category = this.$store.state.selectedCategory;
        if (category === "All") {
          this.posts = await FirebaseService.getPosts();
        } else {
          this.posts = await FirebaseService.getPostsByCategory(category);
        }
      } else {
        const category = this.$store.state.selectedCategory;
        const uid = this.$store.state.writerUid;
        if (category === "All") {
          this.posts = await FirebaseService.getPostsById(uid);
        } else {
          this.posts = await FirebaseService.getPostsByCategoryId(
            category,
            uid
          );
        }
      }

      // this.posts = await FirebaseService.getPosts();
      console.log(this.posts.length);
      console.log("UID::" + this.$store.state.writerUid);
    },
    loadMorePosts() {
      this.limits += 4;
    }
  }
};
</script>
