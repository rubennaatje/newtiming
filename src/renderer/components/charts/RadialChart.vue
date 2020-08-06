<template>
  <apexchart
    width="100%"
    height="100%"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>

export default {
  data () {
    return {
      series: [70],
      chartOptions: {
        chart: {
          type: 'radialBar',
        },

        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            hollow: {
              //   size: "70%"
            },
          },
        },
        labels: ['Fuel'],
      },
    };
  },
};
</script>
