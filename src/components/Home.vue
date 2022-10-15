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

<div class="home-items">
  <div class="menu-item" @click="toggle(2)">Dictionary</div>
  <div class="menu-item" @click="toggle(3)">Word lists</div>
  <div class="menu-item" @click="toggle(4)">Kana table</div>
  <div class="menu-item" @click="toggle(5)">Kanji table</div>
  <div class="menu-item" @click="toggle(6)">Settings</div>
</div>


</template>

<style scoped>
.home-items {
  background-color: #ef243c;
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: repeat(5, 120px);
  padding: 10px;
  gap: 10px;
  justify-items: center;
  height: calc(100vh - 70px);
}
.menu-item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 120px;
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
