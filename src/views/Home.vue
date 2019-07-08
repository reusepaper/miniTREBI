<template>
  <div>
    <WMHeader></WMHeader>
    <v-container>
      <HelloWorld/>
    </v-container>
    <WMSidebar></WMSidebar>
    <WMFooter></WMFooter>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import WMHeader from "../components/WMHeader";
import WMFooter from "../components/WMFooter";
import WMSidebar from "../components/WMSidebar";
export default {
  components: {
    HelloWorld,
    WMHeader,
    WMFooter,
    WMSidebar
  }
};
</script>
