<template>
  <v-card>
    <v-img :src="image" height="200px"></v-img>
    <v-card-title primary-title>
      <div>
        <div>{{ title }}</div>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "WMPost",
  props: {
    title: { type: String },
    content: { type: String },
    image: { type: String },
    writer: { type: String }
  },
  data() {
    return {};
  }
};
</script>
