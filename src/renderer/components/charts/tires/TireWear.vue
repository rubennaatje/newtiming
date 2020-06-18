<template>
  <div>
    <apexchart
      width="100%"
      height="100%"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['tire'],
  data () {
    return {
      series: [70],
      chartOptions: {
        chart: {
          type: 'radialBar',
        },
        colors: ['#FF0000'],
        plotOptions: {
          radialBar: {
            hollow: {
              //   size: "70%"
            },
          },
        },
        labels: [this.tire],
      },
    };
  },
};
</script>
