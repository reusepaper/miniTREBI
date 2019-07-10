<template>
  <div>
    <VueApexCharts width="500" type="scatter" :options="chartOptions" :series="series"></VueApexCharts>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  components: {
    VueApexCharts
  },
  data: function() {
    return {
      series: [
        {
          name: "TEAM 1",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            5,
            {
              min: 10,
              max: 60
            }
          )
        },
        {
          name: "TEAM 2",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            5,
            {
              min: 10,
              max: 60
            }
          )
        },
        {
          name: "TEAM 3",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            5,
            {
              min: 10,
              max: 60
            }
          )
        },
        {
          name: "TEAM 4",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            5,
            {
              min: 10,
              max: 60
            }
          )
        },
        {
          name: "TEAM 5",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            5,
            {
              min: 10,
              max: 60
            }
          )
        },
        {
          name: "TEAM 6",
          data: [1486771200000, 10]
        }
      ],
      chartOptions: {
        chart: {
          zoom: {
            type: "xy"
          }
        },

        dataLabels: {
          enabled: false
        },
        grid: {
          xaxis: {
            showLines: true
          },
          yaxis: {
            showLines: true
          }
        },
        xaxis: {
          type: "datetime"
        },
        yaxis: {
          max: 70
        }
      }
    };
  },
  methods: {
    generateDayWiseTimeSeries(baseval, count, yrange) {
      var i = 0;
      var series = [];

      while (i < count) {
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
          yrange.min;

        series.push([baseval, y]);
        baseval += 86400000;
        i++;
      }
      return series;
    }
  }
};
</script>

<style>
</style>
