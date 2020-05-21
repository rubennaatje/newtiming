<template>
  <div class="marquee">
    <div class="rotating">
      <div v-for="(car, index) in allCars" :key="car.realdeal.EntryNumber" class="car-row">
        <span class="car-pos">{{ index + 1 }}</span>
        <span class="car-num">{{ car.realdeal.EntryNumber }}</span>
        <span :class="'car-class rotate-30 ' + car.realdeal.category">&nbsp;</span>
        <span class="car-team">{{ car.car2 }}&nbsp;-&nbsp;</span>
        <span> {{ car.realdeal.drivers[0].name }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      allCars: 'cars/getStandings',
    }),
  },
};
</script>
<style>
.marquee {
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
}
.marquee div.rotating {
  display: inline-block;
  animation: marquee 140s linear infinite;
}
@keyframes marquee {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}

.car-row {
  display: inline-block;
  background: rgb(0,0,38);
  background: linear-gradient( rgba(0,0,38,1) 0%, rgba(22,22,64,1) 34%, rgba(29,28,65,1) 46%, rgba(18,17,59,1) 69%, rgba(3,2,38,1) 100%);
  border-bottom-left-radius: 6px;
  margin-left: 5px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 1px;
}

.car-pos {
  clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);
  background-color: white;
  display: inline-block;
  width: 30px;
  text-align: center;
  color: black;
  font-weight: 900;
  padding-left: 3px;
  padding-right: 3px;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 2px;
}

.car-class {
  display: inline-block;
  width: 10px;
  background-color: red;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  border-bottom-right-radius: 19px;
  border-top-left-radius: 15px;
  transform: rotate(10deg);
}

.LMP1 {
  background-color: red;
}
.LMP2 {
  background-color: blue;
}
.LMGTEPro {
  background-color: green;
}
.LMGTEAm {
  background-color: orange;
}
</style>
