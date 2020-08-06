<template>
  <div class="max-h-full">
    <apexchart
      type="donut"
      width="100%"
      height="100%"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>

export default {
  data () {
    return {
      series: [44, 55, 13],
      chartOptions: {
        chart: {
          width: '100%',
          type: 'donut',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 0,
        },
        labels: ['Nakajima', 'Buemi', 'Hartley'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },
    };
  },
};
</script>
