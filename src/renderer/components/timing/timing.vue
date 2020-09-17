<template>
  <table>
    <thead>
      <th v-if="!hideCols.includes(1)" @click="hideColumn(1)">
        POS
      </th>
      <th v-if="!hideCols.includes(2)" @click="hideColumn(2)">
        PIC
      </th>
      <th v-if="!hideCols.includes(3)" @click="hideColumn(3)">
        #
      </th>
      <th v-if="!hideCols.includes(4)" @click="hideColumn(4)">
        STATE
      </th>
      <th v-if="!hideCols.includes(5)" @click="hideColumn(5)">
        CAT
      </th>
      <th v-if="!hideCols.includes(6)" @click="hideColumn(6)">
        TEAM
      </th>
      <th v-if="!hideCols.includes(7)" @click="hideColumn(7)">
        DRIVER
      </th>
      <th v-if="!hideCols.includes(8)" @click="hideColumn(8)">
        CAR
      </th>
      <th v-if="!hideCols.includes(9)" @click="hideColumn(9)">
        LAP
      </th>
      <th v-if="!hideCols.includes(10)" @click="hideColumn(10)">
        GAP
      </th>
      <th v-if="!hideCols.includes(11)" @click="hideColumn(11)">
        INT
      </th>
      <th v-if="!hideCols.includes(12)" @click="hideColumn(12)">
        S1
      </th>
      <th v-if="!hideCols.includes(13)" @click="hideColumn(13)">
        BS1
      </th>
      <th v-if="!hideCols.includes(14)" @click="hideColumn(14)">
        S2
      </th>
      <th v-if="!hideCols.includes(15)" @click="hideColumn(15)">
        BS2
      </th>
      <th v-if="!hideCols.includes(16)" @click="hideColumn(16)">
        S3
      </th>
      <th v-if="!hideCols.includes(17)" @click="hideColumn(17)">
        BS3
      </th>
      <th v-if="!hideCols.includes(18)" @click="hideColumn(18)">
        LAST LAP
      </th>
      <th v-if="!hideCols.includes(19)" @click="hideColumn(19)">
        BEST LAP
      </th>
      <th v-if="!hideCols.includes(20)" @click="hideColumn(20)">
        PITS
      </th>
    </thead>
    <tbody>
      <tr v-for="todo in allCars" :key="todo.number">
        <td v-if="!hideCols.includes(1)" class="action">
          {{ todo.ranking }}
        </td>
        <td v-if="!hideCols.includes(2)" :class="todo.category + ' carclass ' + 'action'">
          {{ todo.categoryPosition }}
        </td>
        <td v-if="!hideCols.includes(3)" class="action">
          {{ todo.number }}
        </td>
        <td v-if="!hideCols.includes(4)" class="action">
          {{ todo.state }}
        </td>
        <td v-if="!hideCols.includes(5)" :class="todo.category + ' carclass ' + 'action'">
          {{ todo.category }}
        </td>
        <td v-if="!hideCols.includes(6)">
          {{ todo.team }}
        </td>
        <td v-if="!hideCols.includes(7)">
          {{ todo.driver }}
        </td>
        <td v-if="!hideCols.includes(8)">
          {{ todo.car }}
        </td>
        <td v-if="!hideCols.includes(9)">
          {{ todo.lap }}
        </td>
        <td v-if="!hideCols.includes(10)">
          {{ todo.gap }}
        </td>
        <td v-if="!hideCols.includes(11)">
          {{ todo.gapPrev }}
        </td>
        <td v-if="!hideCols.includes(12)" :class="todo.number + 'CS1'">
          {{ todo.currentSector1 }}
        </td>
        <td v-if="!hideCols.includes(13)" :class="todo.number + 'BS1'">
          {{ todo.bestSector1 }}
        </td>
        <td v-if="!hideCols.includes(14)" :class="todo.number + 'CS2'">
          {{ todo.currentSector2 }}
        </td>
        <td v-if="!hideCols.includes(15)" :class="todo.number + 'BS2'">
          {{ todo.bestSector2 }}
        </td>
        <td v-if="!hideCols.includes(16)" :class="todo.number + 'CS3'">
          {{ todo.currentSector3 }}
        </td>
        <td v-if="!hideCols.includes(17)" :class="todo.number + 'BS3'">
          {{ todo.bestSector3 }}
        </td>
        <td v-if="!hideCols.includes(18)" :class="todo.number + 'LL'">
          {{ todo.lastlap }}
        </td>
        <td v-if="!hideCols.includes(19)" :class="todo.number + 'bL'">
          {{ todo.bestlap }}
        </td>
        <td v-if="!hideCols.includes(20)" :class="todo.number + 'bL'">
          {{ todo.pitstop }}
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
  data () {
    return {
      hideCols: [],
    };
  },
  computed: {
    ...mapGetters({
      allCars: 'lemans/getAll',
    }),
  },

  async  mounted () {

  },
  methods: {
    hideColumn (coli) {
      console.log(coli);
      this.hideCols.push(coli);
    },
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
th {
    text-align: left;
    text-decoration: underline;
    font-weight: 900;
    color: whitesmoke;
}
</style>
