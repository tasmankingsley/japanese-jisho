<script setup>
import { store, nav, list } from './store';

window.scrollTo(0, 0);

function select_list(num) {
  for (let i = 0; i < list.length - 1; i++) {
    list[i].visible = false;
  }

  list[num].visible = true; // select clicked list
  nav[3].visible = false; // hide this component
  store.words = true; // load words component
}

</script>

<template>

<div class="lists">
  <div class="menu-item" @click="select_list(0)">{{list[0].start}}-{{list[0].end}}</div>
  <div class="menu-item" @click="select_list(1)">{{list[1].start}}-{{list[1].end}}</div>
  <div class="menu-item" @click="select_list(2)">{{list[2].start}}-{{list[2].end}}</div>
  <div class="menu-item" @click="select_list(3)">{{list[3].start}}-{{list[3].end}}</div>
  <div class="menu-item" @click="select_list(4)">{{list[4].start}}-{{list[4].end}}</div>
  <div class="menu-item" @click="select_list(5)">{{list[5].start}}-{{list[5].end}}</div>
  <div class="menu-item" @click="select_list(6)">{{list[6].start}}-{{list[6].end}}</div>
  <div class="menu-item" @click="select_list(7)">{{list[7].start}}-{{list[7].end}}</div>
  <div class="menu-item" @click="select_list(8)">{{list[8].start}}-{{list[8].end}}</div>
  <div class="menu-item" @click="select_list(9)">{{list[9].start}}-{{list[9].end}}</div>
  <div class="menu-item" @click="select_list(10)">{{list[10].start}}-{{list[10].end}}</div>
  <div class="menu-item" @click="select_list(11)">{{list[11].start}}-{{list[11].end}}</div>
  <div class="menu-item" @click="select_list(12)">{{list[12].start}}-{{list[12].end}}</div>
  <div class="menu-item" @click="select_list(13)">{{list[13].start}}-{{list[13].end}}</div>
  <div class="menu-item" @click="select_list(14)">{{list[14].start}}-{{list[14].end}}</div>
  <div class="menu-item" @click="select_list(15)">{{list[15].start}}-{{list[15].end}}</div>
  <div class="menu-item" @click="select_list(16)">{{list[16].start}}-{{list[16].end}}</div>
  <div class="menu-item" @click="select_list(17)">{{list[17].start}}-{{list[17].end}}</div>
  <div class="menu-item" @click="select_list(18)">{{list[18].start}}-{{list[18].end}}</div>
  <div class="menu-item" @click="select_list(19)">{{list[19].start}}-{{list[19].end}}</div>
  <div class="menu-item" @click="select_list(20)">{{list[20].start}}-{{list[20].end}}</div>
  <div class="menu-item" @click="select_list(21)">{{list[21].start}}-{{list[21].end}}</div>
</div>

</template>

<style scoped>
.lists {
  background-color: #ef243c;
  display: grid;
  grid-auto-flow: row;
  padding: 10px;
  gap: 10px;
  justify-items: center;
}
.menu-item {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 80px;
  background-color: #99d2d4;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  font-size: 1.5rem;
  width: 100%;
  max-width: 500px;
}

.menu-item:hover {
  cursor: pointer;
  color: #99d2d4;
  background-color: #fff;
}
</style>