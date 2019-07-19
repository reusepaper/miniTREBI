<template>
  <v-layout row wrap>
    <v-flex px-2 py-2 xs12 sm6 md3>
      <v-card class="card-img-1">
        <v-img :src="require('../assets/goubook1.png')" aspect-ratio="1" position="center bottom"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">유동관</h3>
            <div>{{ card_text }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 px-2 py-2 md3>
      <v-card class="card-img-1">
        <v-img :src="require('../assets/pikachu.jpg')" aspect-ratio="1" position="center bottom"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">한단비</h3>
            <div>{{ card_text }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 px-2 py-2 md3>
      <v-card class="card-img-1">
        <v-img :src="require('../assets/hesee.jpg')" aspect-ratio="1" position="center bottom"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">임연지</h3>
            <div>{{ card_text }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md3 py-2 px-2>
      <v-card class="card-img-1">
        <v-img :src="require('../assets/togepi.jpg')" aspect-ratio="1" position="center bottom"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">이주호</h3>
            <div>{{ card_text }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md3 py-2 px-2>
      <v-card class="card-img-1">
        <v-img :src="require('../assets/jammanbo.jpg')" aspect-ratio="1" position="center bottom"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">한만섭</h3>
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
</template>
<script>
export default {
  data() {
    return {
      card_text:
        "안녕하세요:)"
    };
  }
};
</script>
<style>
</style>
