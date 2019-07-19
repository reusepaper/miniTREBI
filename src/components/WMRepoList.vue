<template>
  <v-layout column px-4>
    <v-flex v-for="i in repositories.length > limits ? limits : repositories.length">
      <v-divider v-if="i === 1"></v-divider>
      <WMRepo :repos="repositories[i - 1]"></WMRepo>
      <v-divider></v-divider>
    </v-flex>
  </v-layout>
</template>
<script>
import GitlabService from "../services/GitlabService";
import WMRepo from "./WMRepo";
export default {
  name: "WMRepoList",
  props: {
    limits: { type: Number, default: 5 },
    loadMore: { type: Boolean, default: false }
  },
  components: {
    WMRepo
  },
  data() {
    return {
      repositories: [],
      commits: []
    };
  },
  mounted() {
    // this.getGitCommits("6073");
    this.getGitRepos("leeiopd");
  },
  methods: {
    async getGitRepos(userName) {
      const response = await GitlabService.getRepos(userName);
      if (response.status !== 200) {
        return;
      }
      this.repositories = response.data;
      console.log(this.repositories[0].name);
    },
    async getGitCommits(repoId) {
      console.log(repoId);
      const response = await GitlabService.getCommits(repoId);
      if (response.status !== 200) {
        console.log("에러");
        return;
      } else {
        console.log(response.data);
        this.commits = response.data;
        console.log(this.commits);
      }
    }
  }
};
</script>
