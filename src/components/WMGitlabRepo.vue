<template>
  <v-layout column px-4>
    <v-flex
      v-for="i in commits.length"
    >{{commits[i-1].author_name}} -> {{commits[i-1].authored_date}}</v-flex>
    <ApexChart></ApexChart>
  </v-layout>
</template>

<script>
import GitlabService from "../services/GitlabService";
import ApexChart from "./ApexChart";
export default {
  name: "WMGitlabRepo",
  props: {
    limits: { type: Number, default: 5 },
    loadMore: { type: Boolean, default: false }
  },
  components: {
    ApexChart
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
      console.log(this.repositories);
      for (let i in this.repositories) {
        this.getGitCommits(this.repositories[i]);
      }
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
