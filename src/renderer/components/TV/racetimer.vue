<template>
  <div class="max-w-md mx-auto text-center m-1">
    <span class="timing-span"> 10:10:43 </span> <br>
    <span v-if="safetyCar" class="timing-span safety-car"> SAFETY CAR</span>
    <span v-if="FCY" cclass="timing-span fcy"> FCY</span>
    <span v-if="red" cclass="timing-span redflag"> RED</span>
    <span v-if="finish" cclass="timing-span finish"> Finish</span>
    <span v-if="slowzones" cclass="timing-span slowzones"> Finish</span>
    <span v-if="code60" cclass="timing-span code-60"> Code 60</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      safetyCar: false,
      FCY: false,
      red: false,
      slowzones: false,
      finish: false,
      code60: false,
    };
  },
};
</script>

<style scoped>
.timing-span {
  background: rgb(0,0,91);
  background: linear-gradient(184deg, rgba(0,0,91,1) 31%, rgba(2,0,36,1) 61%, rgba(0,50,60,1) 100%);
  padding: 5px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  font-weight: bold;
  width: 115px;
  display: inline-block;
}

.safety-car, .fcy, .slowzones{
  background: rgb(235,214,7);
  background: linear-gradient(360deg, rgba(235,214,7,1) 0%, rgba(191,174,6,1) 100%);
  color: black;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 6px;
  border-top-right-radius: 6px;
}
</style>
