<template>
  <div>
    <div class="battle">
      <div class="classname">LMP1</div>Battle for 5th place
    </div>
    <ul>
      <li class="car-row">
        <span class="car-pos">1</span>
        <span class="car-num">64</span>
        <span class="car-class">&nbsp;</span>
        <span class="car-team">Corvette racing -</span>
      </li>
      <li class="car-row">
        <span class="car-pos">2</span>
        <span class="car-num">64</span>
        <span class="car-class">&nbsp;</span>
        <span class="car-team">Corvette racing -</span>
      </li>
      <li class="car-row">
        <span class="car-pos">3</span>
        <span class="car-num">64</span>
        <span class="car-class">&nbsp;</span>
        <span class="car-team">Corvette racing -</span>
      </li>
      <li class="car-row">
        <span class="car-pos">4</span>
        <span class="car-num">64</span>
        <span class="car-class">&nbsp;</span>
        <span class="car-team">Corvette racing -</span>
        <span class="car-lastinfo"> Jordan Taylor</span>
      </li>
    </ul>
  </div>
</template>
<style>
.classname {
  display: inline-block;
  width: 50px;
  clip-path: polygon(0 1%, 75% 0, 100% 100%, 0% 100%);
  background-color: red;
  color: white;
  font-weight: bolder;
    border-bottom-left-radius: 6px;
}
.battle {
  clip-path: polygon(0 1%, 96% 0, 100% 100%, 0% 100%);
  background-color: white;
  color: black;
  border-bottom-left-radius: 10px;
}

.car-row {
  background-color: black;
  border-bottom-left-radius: 6px;
  margin-top: 2px;
}

.car-pos {
  clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);
  background-color: white;
  display: inline-block;
  width: 20px;
  color: black;
  font-weight: 900;
  padding-left: 2px;
  border-bottom-left-radius: 6px;
}

.car-class {
  display: inline-block;
  width: 10px;
  background-color: red;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  border-bottom-right-radius: 19px;
  border-top-left-radius: 15px;
}

ul>li::after {
    content: "";
    padding-left: 0;
}
ul>li {
  padding-left: 0;
}
ul {
  margin: 0;
}
</style>
