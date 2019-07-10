<template>
  <v-layout>
    <v-flex xs3 sm6 px-2>
      <v-card class='card-img-1'>
        <v-img
        :src="require('../assets/goubook1.png')" aspect-ratio="1"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">유동관</h3>
            <div> {{ card_text }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
      <v-flex xs3 sm6 px-2>
      <v-card class='card-img-1'>
        <v-img
        :src="require('../assets/pikachu.jpg')" aspect-ratio="1"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">한단비</h3>
            <div> {{ card_text }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
        <v-flex xs3 sm6 px-2>
      <v-card class='card-img-1'>
        <v-img
        :src="require('../assets/hesee.jpg')" aspect-ratio="1"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">임연지</h3>
            <div> {{ card_text }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
        <v-flex xs3 sm6 px-2>
      <v-card class='card-img-1'>
        <v-img
        :src="require('../assets/togepi.jpg')" aspect-ratio="1"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">이주호</h3>
            <div> {{ card_text }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
        <v-flex xs3 sm6 px-2>
      <v-card class='card-img-1'>
        <v-img
        :src="require('../assets/jammanbo.jpg')" aspect-ratio="1"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">한만섭</h3>
            <div> {{ card_text }} </div>
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
    data () {
      return {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
      }
    }
  }
</script>
<style>
.card-img-1, .card-img-2{
  overflow: hidden;
}
.card-img-1 img{
  margin-top: -60%;
}
.card-img-2 img{
  margin-top: -68%;
}
</style>
