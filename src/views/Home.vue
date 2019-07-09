<template>
  <div>
    <WMHeader></WMHeader>
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

    <WMFooter></WMFooter>
  </div>
</template>
<script>
import ImgBanner from "../components/ImgBanner";
import HelloWorld from "../components/HelloWorld";
import WMSidebar from "../components/WMSidebar";
import WMHeader from "../components/WMHeader";
import WMFooter from "../components/WMFooter";
export default {
  components: {
    ImgBanner,
    HelloWorld,
    WMSidebar,
    WMHeader,
    WMFooter
  }
};
</script>
