
<template>
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="grey darken-3 bottom-fixed footer-info-container">
        <div class="button">
          <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
            <!-- <v-icon size="24px">{{ icon }}</v-icon> -->
            <a target="_blank" href="https://lab.ssafy.com/leeiopd/webmobile-sub2">
              <i v-bind:class="icon "></i>
            </a>
          </v-btn>
        </div>
        <div class="weather-container">
          <div class="weather-info">
            <div class="place">{{place}}</div>
            <div class="temp">{{temp}}°C</div>
          </div>
          <div class="weather-svg">
            <template v-if="weather ==='Clear'">
              <Clear></Clear>
            </template>
            <template v-if="weather ==='Clouds'">
              <Cloudy></Cloudy>
            </template>
            <template v-if="weather ==='Fog'">
              <Cloudy></Cloudy>
            </template>
            <template v-if="weather ==='Rain'">
              <Rainy></Rainy>
            </template>
            <template v-if="weather ==='Mist'">
              <Cloudy></Cloudy>
            </template>
            <template v-if="weather ==='Dust'">
              <Cloudy></Cloudy>
            </template>
            <template v-if="weather ==='Haze'">
              <Cloudy></Cloudy>
            </template>
          </div>
        </div>
        <!-- <strong class="subheading">Get connected with us on social networks!</strong> -->
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2019-07-08&nbsp;
        <br />
        <strong>ssafy daejeon</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
import Clear from "./WeatherCondition/Clear";
import Cloudy from "./WeatherCondition/Cloudy";
import Rainy from "./WeatherCondition/Rainy";
const APPKEY = "abbc68919e6b6d4296b60cafacd58803";
export default {
  name: "WMFooter",
  data: () => ({
    icons: ["fab fa-github fa-2x"],
    weather: "Clear",
    place: "대전광역시",
    temp: 28
  }),
  components: {
    Clear,
    Cloudy,
    Rainy
  },
  mounted() {
    this.getPosition();
  },
  methods: {
    getPosition: function() {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const log = position.coords.longitude;
        this.getWeather(lat, log);
      });
    },
    getWeather: function(lat, log) {
      // open weather map
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&APPID=${APPKEY}`
      )
        .then(response => response.json())
        .then(json => {
          this.weather = json.weather[0].main;
          this.temp = Math.floor(json.main.temp - 273.15);
          if (json.name === "Taejŏn-gwangyŏksi") {
            this.place = "대전광역시";
          }
          /*eslint-disable*/
          console.log(this.weather);
          // console.log(this.temp, this.place, this.weather);
        });
    }
  }
};
</script>


<style scoped>
.footer-info-container {
  display: flex;
  justify-content: center;
  position: relative;
}

.weather-container {
  display: flex;
  position: absolute;
  align-items: center;
  right: 20px;
}
.weather-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.fab {
  width: 24px;
  height: 24px;
}
a {
  color: #fff;
}
</style>
