<script setup>
import { store, nav } from './store';

function toggle(num) {
  for (let i = 1; i < nav.length - 1; i++) {
    nav[i].visible = false;
  }
  nav[num].visible = true;
  store.title = nav[num].name;
}
</script>
    
<template>

<div class="menu-item" @click="toggle(2)">Dictionary</div>
<div class="menu-item" @click="toggle(3)">Word lists</div>
<div class="menu-item" @click="toggle(4)">Kana table</div>
<div class="menu-item" @click="toggle(5)">Kanji table</div>
<!-- <div class="menu-item" @click="toggle(6)">Settings</div> -->


</template>

<style scoped>
.menu-item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 120px;
    background-color: #99d2d4;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    margin: 10px;
    font-size: 1.5rem;
    /* gap: 10px; */
}

.menu-item:hover {
    /* opacity: 0.9; */
    cursor: pointer;
    color: #99d2d4;
    background-color: #fff;
    
}
</style>
    