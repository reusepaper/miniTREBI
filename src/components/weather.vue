<template>
  <weather
    api-key="<your-dark-sky-api-key>"
    title="Weather"
    latitude="24.886436"
    longitude="91.880722"
    language="ko"
    units="uk"
  ></weather>
</template>
 
<script>
import VueWeatherWidget from "vue-weather-widget";
import "vue-weather-widget/dist/css/vue-weather-widget.css";

export default {
  components: {
    weather: VueWeatherWidget
  }
};
</script> 