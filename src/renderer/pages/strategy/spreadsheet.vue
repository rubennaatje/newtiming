<template>
  <div>
    <spreadsheet ref="spreadsheet" :options="options" :data="data" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      spreadsheet: null,
      // If other options needed
      options: {
        view: {
          height: () => document.documentElement.clientHeight - 100,
          width: () => document.documentElement.clientWidth,
        },
      },
      // Initial data for spreadsheet
      data: {

      },
    };
  },
  mounted () {
    this.spreadsheet = this.$refs.spreadsheet.spreadsheet;
  },

};
</script>

<style>
.x-spreadsheet-toolbar {
    color: #4c4c4c;
}
</style>
