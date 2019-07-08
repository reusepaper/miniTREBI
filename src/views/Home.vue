<template>
  <div>
    <WMHeader></WMHeader>
    <v-container>
      <v-layout>
        <v-flex xs3>
          <WMSidebar></WMSidebar>
        </v-flex>
        <v-flex xs9>
          <HelloWorld />
        </v-flex>
      </v-layout>
    </v-container>

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
