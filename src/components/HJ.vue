<template>
  <v-jumbotron :gradient="gradient"
    src=""
    dark>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Team TRAVI</h3>
          <span class="subheading">2반 연지 주호 단비 만섭</span>
      <v-menu :close-on-content-click="false" :nudge-width="200" v-model="menu" offset-x>
      <span slot="activator" class="subheading">동관</span>
      <v-card>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="/static/doc-images/john.jpg" alt="YDK">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>유동관</v-list-tile-title>
              <v-list-tile-sub-title>팀 트래비 2조</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn
                :class="fav ? 'red--text' : ''"
                icon
                @click="fav = !fav"
              >
                <v-icon>favorite</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="message" color="purple"></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>Enable messages</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="hints" color="purple"></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>Enable hints</v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="menu = false">Cancel</v-btn>
          <v-btn color="primary" flat @click="menu = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">{{content_msg}}</div>
          <v-btn large color="primary" class="mx-0">See more</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
  export default {
    data: () => ({
      gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)',
      fav: true,
      menu: false,
      message: false,
      hints: true,
      content_msg: 'orem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
    })
  }
</script>