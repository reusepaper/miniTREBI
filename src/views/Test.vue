<template>
  <div>
    <v-container mt-5>
      <v-layout>
        <WMSidebar></WMSidebar>
        <v-flex xs12>
          <WMPostlist :limits="4" :load-more="true"></WMPostlist>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
import WMPostlist from "../components/WMPostlist";
import WMSidebar from "../components/WMSidebar"
export default {
  name: "WMPostPage",
  components: {
    WMPostlist,
    WMSidebar
  }
};
</script>
