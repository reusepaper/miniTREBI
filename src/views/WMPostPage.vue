<template>
  <div>
    <v-container mt-5>
      <WMPostlist></WMPostlist>
    </v-container>
  </div>
</template>

<script>
import WMPostlist from "../components/WMPostlist";
export default {
  name: "WMPostPage",
  components: {
    WMPostlist
  }
};
</script>
