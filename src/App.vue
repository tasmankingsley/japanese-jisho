<script setup>
import Nav from './components/Nav.vue';
import Home from './components/Home.vue';
import Dictionary from './components/Dictionary.vue';
import Kana from './components/Kana.vue';
import Word from './components/Word.vue';
import Tabs from './components/Tabs.vue';
import { store, nav } from './components/store';

// import { defineAsyncComponent } from 'vue'

// const Dictionary = defineAsyncComponent(() =>
//   import('./components/Dictionary.vue')
// )

function toggle_nav() {
  nav[0].visible =  !nav[0].visible;
}
</script>

<template>
  <div v-if="nav[0].visible">
    <Nav/>
  </div>

  <div class="header">
    <span class="burger" @click="toggle_nav">{{!nav[0].visible ? '⃝' : '✕'}}</span>
    <span>{{store.title}}</span>
  </div>
  
  <div class="grid">
    <div v-if="nav[1].visible">
      <Home/>
    </div>

    <div v-if="nav[2].visible">
      <Dictionary/>
    </div>

    <div v-if="nav[3].visible">

    </div>

    <div v-if="nav[4].visible">
      <Kana/>
    </div>

    <div v-if="nav[5].visible">

    </div>

    <div v-if="nav[6].visible">

    </div>



    <div v-if="store.words">
      <Word/>
    </div>

  </div>


  <Tabs/>
</template>

<style scoped>
.header {
  font-size: 1.5rem;
  height: 40px;
  line-height: 40px;
  position: sticky;
  top: 0;
  background-color: black;
  text-align: center;
}

.burger {
  position: fixed;
  left: 5px;
  top: 0px;
  font-size: 30px;
  /* line-height: 40px; */
  cursor: pointer;
}

.search {
  float: right;
}

.grid {
  display: grid;
  grid-auto-flow: row;
  color: black;
}
</style>
