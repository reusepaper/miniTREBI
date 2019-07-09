<template>
  <div>
    <WMHeader></WMHeader>
    <v-container mt-5>
      <WMPost></WMPost>
    </v-container>
    <WMFooter></WMFooter>
  </div>
</template>

<script>
import WMHeader from "../components/WMHeader";
import WMFooter from "../components/WMFooter";
import WMPost from "../components/WMPost";
export default {
  components: {
    WMHeader,
    WMFooter,
    WMPost
  }
};
</script>
