<template>
  <div class="hide-overflow" style="position: relative;">
    <v-toolbar fixed>
      <v-btn flat icon>
          <v-icon>home</v-icon>
      </v-btn>
      <v-toolbar-title>TREVI</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>LOGIN</v-btn>
        <v-btn flat>Ho</v-btn>
        <v-btn flat>DK</v-btn>
        <v-btn flat>yeon</v-btn>
        <v-btn flat>mansub</v-btn>
        <v-btn flat>rain</v-btn>
        <v-btn flat>Search</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'WMHeader',
  props: {},
  data(){

  }
}
</script>
