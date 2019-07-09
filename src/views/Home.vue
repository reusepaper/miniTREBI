<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs1>
          <WMSidebar></WMSidebar>
        </v-flex>
        <v-flex xs11>
          <HelloWorld />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ImgBanner from "../components/ImgBanner";
import HelloWorld from "../components/HelloWorld";

export default {
  components: {
    ImgBanner,
    HelloWorld,
  }
};
</script>
