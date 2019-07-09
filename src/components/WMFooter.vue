
<template>
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <v-icon>{{weather}}</v-icon>
        <v-spacer></v-spacer>
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2019-07-08
        <strong>ssafy daejeon</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
const APPKEY = "abbc68919e6b6d4296b60cafacd58803";
export default {
  name: "WMFooter",
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ],
    weather: "wb_sunny"
  }),
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
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&APPID=${APPKEY}`
      )
        .then(response => response.json())
        .then(json => {
          const weather = json.weather[0].main;
          const temp = Math.floor(json.main.temp - 273.15);
          const place = json.name;
          if (weather === "Clouds") {
            this.weather = "wb_cloudys";
          } else if (weather === "Clear") {
            this.weather = "wb_sunny";
          } else if (weather === "Rain") {
            this.weather = "wb_sunny";
          }
          console.log(temp, place, weather);
        });
    }
  }
};
</script>
