<template>
  <v-layout>
    <v-flex>
      <div>      
        <v-container class='content-main'>
          <v-layout>
            <v-flex xs12>
              <HJ></HJ>
            </v-flex>
          </v-layout>
          <v-layout>
            <!-- <v-flex xs1>
              <WMSidebar></WMSidebar>
            </v-flex> -->

            <v-flex xs12>
              <HelloWorld></HelloWorld>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12>
              <PFShow></PFShow>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import ImgBanner from "../components/ImgBanner";
import HelloWorld from "../components/HelloWorld";
import WMSidebar from "../components/WMSidebar";
import HJ from "../components/HJ";
import PFShow from "../components/PFShow";
export default {
  components: {
    ImgBanner,
    HelloWorld,
    WMSidebar,
    HJ,
    PFShow
  }
};
</script>
<style>
.content-main{
  margin-top:60px;
}
</style>
