<template>
  <v-layout column px-4>
    <v-flex
      v-for="i in repositories.length > limits ? limits : repositories.length"
    >{{repositories[i-1].last_activity_at}}</v-flex>
  </v-layout>
</template>

<script>
import GitlabService from "../services/GitlabService";

export default {
  name: "RepositoryList",
  props: {
    limits: { type: Number, default: 5 },
    loadMore: { type: Boolean, default: false }
  },
  data() {
    return {
      repositories: []
    };
  },
  mounted() {
    // this.getGitCommits("13akstjq");
    this.getGitRepos("13akstjq");
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
    async getGitCommits(repo) {
      console.log(repo.id);
      const response = await GitlabService.getCommits(repo.id);
      if (response.status !== 200) {
        return;
      } else {
        console.log(response.data);
      }
    }
  }
};
</script>
