<template>
  <div>
    <div class="mx-auto object-center ">
      <img class="driverpic" src="https://storage.googleapis.com/ecm-prod/assets/1/pilote/1915/portrait-vergne-jean-eric-mpsa-mlmc-mon18-sp1-2410_375b21.png">
      <img class="driverpic" src="https://storage.googleapis.com/ecm-prod/assets/1/pilote/107/portrait_Roman_RUSINOV_GR8R9381_025941.png">
      <img class="driverpic" src="https://storage.googleapis.com/ecm-prod/assets/1/pilote/2233/job-van-uitert_7334b6.png">
    </div>
    <div class="car-row ">
      <span class="car-pos">1</span>
      <span class="car-num">26</span>
      <span :class="'car-class rotate-30 lmp2'">&nbsp;</span>
      <span class="car-team">
        G Drive racing
        <flag iso="ru" />
      </span>
      <br>
      <span class="racing-driver-name">
        Jean Eric Vergne
        <flag iso="fr" />
      </span>
      <span class="racing-driver-name active">
        Roman Rusinov
        <flag iso="ru" />
      </span>
      <span class="racing-driver-name">
        Job van Uitert
        <flag iso="nl" />
      </span>
    </div>
    <img class="x-auto object-center" src="https://storage.googleapis.com/ecm-prod/assets/1/engage/43184/2019-wec-26-oreca-07-droite-900-x-260-px_23de99.png" style="max-width: 500px">
  </div>
</template>

<style scoped>
img.driverpic {
    max-width: 160px;
    max-height: 500px;
    display: inline-block;
    align-content: center;
    align-self: center;
    left: auto;
    right: auto;
}
.car-row {
  display: inline-block;
  background: rgb(0, 0, 38);
  background: linear-gradient(
    rgba(0, 0, 38, 1) 0%,
    rgba(22, 22, 64, 1) 34%,
    rgba(29, 28, 65, 1) 46%,
    rgba(18, 17, 59, 1) 69%,
    rgba(3, 2, 38, 1) 100%
  );
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

.racing-driver-name {
    color: grey;
    font-weight: lighter;
}

.racing-driver-name.active {
    color: white;
    font-weight: bold;
}
</style>
