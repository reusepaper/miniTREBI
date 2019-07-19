<template>
  <div>
    <v-dialog
      style="z-index:10000"
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn flat large color="white" dark v-on="on">Contact Us</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-spacer></v-spacer>
          <v-toolbar-title>Contact Us</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container>
          <div class="container">
            <ContactUs></ContactUs>
          </div>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ContactUs from "./ContactUs";

export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    };
  },
  components: {
    ContactUs
  }
};
</script>
<style>
.v-dialog__content.v-dialog__content--active {
  z-index: 10000 !important;
}
</style>