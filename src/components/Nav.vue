<script setup>
import { store, nav, list } from './store';

function toggle(num) {
  for (let i = 1; i < nav.length - 1; i++) {
    nav[i].visible = false;
  }

  for (let i = 0; i < list.length; i++) {
    list[i].visible = false;
  }
  
  store.words = false;
  store.display = false;
  nav[num].visible = true;
  store.title = nav[num].name;
  nav[0].visible = !nav[0].visible;
}

</script>

<template>
<transition>
    <div class="menu" v-if="nav[0].visible">
        <div class="menu_options" >
            <span @click="toggle(1)">Home</span>
            <span @click="toggle(2)">Dictionary</span>
            <span @click="toggle(3)">Word lists</span>
            <span @click="toggle(4)">Kana table</span>
            <span @click="toggle(5)">Kanji table</span>
            <span @click="toggle(6)">Settings</span>
        </div>
    </div>
</transition>
</template>

<style scoped>
.menu {
    font-size: 1.5rem;
    background-color: #0c0c12;
    color: #99d2d4;
    position: fixed;
    width: 300px;
    height: 100%;
    top: 50px;
    transition: width 0.3s;
    z-index: 3;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.3s ease;
}
.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateX(-200px);
}
.menu_options {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: repeat(7, 100px);
    background-color: #0c0c12;
    /* gap: 20px 0; */
    /* text-align: left; */
}

span {
    line-height: 100px;
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: left;
    text-indent: 25%;
    /* text-justify: distribute; */
    /* border-bottom: #fff 1px solid; */
}

span:hover {
    background-color: #fff;
    color: #ef243c;
}

</style>