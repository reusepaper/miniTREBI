<template>
  <div>
    <v-container>
      <v-layout>
        <!-- <v-flex xs3>
          <WMSidebar></WMSidebar>
        </v-flex> -->
        <v-flex xs12>
          <ImgBanner imgSrc="https://source.unsplash.com/featured/?macbook,coffee/1600x900">
            <div style="line-height:1.2em; color:white; font-weight:900;" slot="text">안녕하세요</div>
            <div style="line-height:1.2em; margin-top:20px; color:white;" slot="text">팀 트래비 취미블로그입니다.</div>
          </ImgBanner>
          <HelloWorld></HelloWorld>
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
