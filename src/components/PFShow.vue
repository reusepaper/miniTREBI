<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 md3 v-for="(item, index) in items" :key="index">
        <v-card hover class="card-img-1" @click="selectWriter(item.uid, item.title)">
          <v-img :src="require(`../assets/${item.img}`)" aspect-ratio="1" position="center bottom"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ item.writer }}</h3>
              <div>{{ card_text }}</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "PFShow",
  data: () => ({
    items: [
      {
        title: "Ho",
        writer: "이주호",
        img: 'togepi.jpg',
        uid: "ZTYM5VCPpIbvndytDt2cwlflv6E2"
      },
      {
        title: "ydk",
        writer: "유동관",
        img: 'goubook1.png',
        uid: "NF8MhC7OKgXylePRyVUz9Ov539l1"
      },
      {
        title: "yeon",
        writer: "임연지",
        img: 'hesee.jpg',
        uid: "zqaDXS0la7TmeUKl6aypj3dkQYQ2"
      },
      {
        title: "mansub",
        writer: "한만섭",
        img: 'jammanbo.jpg',
        uid: "3YjEtT966mWsTcuEZzI6tUC1L423"
      },
      {
        title: "rain",
        writer: "한단비",
        img: 'pikachu.jpg',
        uid: "xgc441Z24EfgMDTxhEkAuw2VaWD3"
      }
    ],
    card_text: "안녕하세요"
  }),
  methods: {
    selectWriter: function(uid, s_writer) {
      this.$store.commit("setWriterUid", uid);
      this.$store.commit("setSelectedCategory", "All");
      this.$router.push(`/postlist/${s_writer}`);
    }
  }
};
</script>
<style>
</style>
