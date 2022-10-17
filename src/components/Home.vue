<script setup>
import { store, nav } from './store';

function toggle(num) {
  for (let i = 1; i < nav.length - 1; i++) {
    nav[i].visible = false;
  }
  nav[num].visible = true;
  nav[0].visible = false;
  store.title = nav[num].name;
}


</script>
    
<template>

<div class="background">
  <div class="home-items">
    <div class="menu-item first" @click="toggle(2)">Dictionary</div>
    <div class="menu-item" @click="toggle(3)">Word lists</div>
    <div class="menu-item" @click="toggle(4)">Kana table</div>
    <div class="menu-item last" @click="toggle(5)">Kanji table</div>
    <!-- <div class="menu-item" @click="toggle(6)">Settings</div> -->
  </div>
</div>


</template>

<style scoped>
.background {
  background-color: #e5e9f2;
}
.home-items {
  background-color: #e5e9f2;
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: repeat(4, 120px);
  gap: 1px;
  justify-items: center;
  align-content: center;
  height: calc(100vh - 50px);
  clip-path: circle(240px at center);
}
.menu-item {
    display: grid;
    align-items: center;
    height: 100%;
    background-color: #dc3c44;
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    width: 100%;
}

.menu-item:hover {
    cursor: pointer;
    color: #000;
    background-color: #99d2d4;
}
</style>
