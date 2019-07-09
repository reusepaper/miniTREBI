<template>
  <div style="position: relative;">
    <v-toolbar fixed dense>
      <v-btn flat icon>
        <v-icon>home</v-icon>
      </v-btn>
      <v-toolbar-title>TREVI</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat @click.stop="dialog = true">LOGIN</v-btn>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="headline">Log in</v-card-title>

            <v-card-text>
              <SignIn></SignIn>
              <!-- SignIn template -->
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" flat>Writer</v-btn>
          </template>
          <v-list>
            <v-list-tile v-for="(item, index) in items" :key="index" @click>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn flat>Search</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import SignIn from "./SignIn";
export default {
  components: {
    SignIn
  },
  name: "WMHeader",
  data: () => ({
    items: [
      { title: "Ho" },
      { title: "ydk" },
      { title: "yeon" },
      { title: "mansub" },
      { title: "rain" }
    ],
    dialog: false
  })
};
</script>
