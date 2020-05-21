<template>
  <table>
    <thead>
      <th>
        #
      </th>
      <th>
        category
      </th>
      <th>
        car
      </th>
      <th>
        driver
      </th>
      <th>
        current speed
      </th>
      <th>
        laps
      </th>
      <th>
        s2
      </th>
      <th>
        s3
      </th>
      <th>
        last lap
      </th>
    </thead>
    <tbody>
      <tr v-for="todo in allSprints" :key="todo.carnumber">
        <td class="action">
          {{ todo.carnumber }}
        </td>
        <td :class="todo.category + ' carclass ' + 'action'">
          {{ todo.category }}
        </td>
        <td>
          {{ todo.car2 }}
        </td>
        <td>
          {{ todo.realdeal.drivers[0].name }}
        </td>
        <td>
          {{ todo.speed }}
        </td>
        <td>
          {{ todo.laps }}
        </td>
        <td>
          1
        </td>
        <td>
          21
        </td>
        <td>
          2:01
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {
  mapGetters,
} from 'vuex';

export default {
  computed: {
    ...mapGetters({
      allSprints: 'cars/getStandings',
    }),
  },
};
</script>
<style>
.bar-chart {
  position: fixed;
  left: 10%;
  top: 10%;
  width: 80%;
  height: 80%;
}

tr:nth-child(even) {background-color: #2d2c2c;}
table .action
{
    white-space: nowrap
}

td.action {
    text-align: center;
    width: 5px;
}

table .content {
    width: 100%
}

.carclass {
  color: white;
}

td.LMP1 {
  background-color: red;
}
td.LMP2 {
  background-color: blue;
}
td.LMGTEPro {
  background-color: green;
}
td.LMGTEAm {
  background-color: orange;
}

table td, table th {
    vertical-align: top;
    /* border: 1px solid var(--font-color); */
    border:none !important;
    line-height: 1px !important;
    padding: 10px;
    font-size: 1em;
    color: rgb(185, 194, 66);
}
</style>
