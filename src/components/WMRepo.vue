<template>
  <div class="py-3">
    <v-layout>
      <v-flex xs8>
        <a target="_blank" v-bind:href="repos.http_url_to_repo">
          <h2 class="repoTitle font-weight-regular">{{repos.path_with_namespace}}</h2>
        </a>
        <p
          class="repository--name subheading mb-1 grey--text text--darken-1 font-weight-light"
          style="white-space: nowrap; overflow:hidden; text-overflow:ellipsis;"
        >{{repos.namespace.name}}</p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import GitlabService from "../services/GitlabService";

export default {
  name: "RepoList",
  props: {
    repos: { type: null }
  },
  data() {
    return {
      stats: {}
    };
  },
  mounted() {
    console.log(this.repos);
    this.drawStatGraph();
  },
  methods: {
    async drawStatGraph() {
      this.commits = await GitlabService.getCommits(this.repos.id);
    }
  }
};
</script>

<style scoped >
.repository--name {
  white-space: nowrap;
}

a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
  transition: 0.3;
}
a:hover {
  color: rgba(0, 0, 0, 0.5);
}

.repoTitle {
  word-break: break-all;
}
</style>
