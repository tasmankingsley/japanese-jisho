<script setup>
import Nav from './components/Nav.vue';
import Menu from './components/Menu.vue';
import Dictionary from './components/Dictionary.vue';
import Word from './components/Word.vue';
import Tabs from './components/Tabs.vue';
import { store } from './components/store';

// import { defineAsyncComponent } from 'vue'

// const Dictionary = defineAsyncComponent(() =>
//   import('./components/Dictionary.vue')
// )

function toggle_menu() {
    if (store.nav_visable === false){
        store.nav_visable = true;
    } else {
        store.nav_visable = false;
    }
}
</script>

<template>
  <div v-if="store.nav_visible">
    <Nav/>
  </div>

  <div class="header">
    <span class="burger" @click="toggle_menu">☰</span>
    <span>Japanese Jisho</span>
  </div>
  
  <div class="grid">
    <div v-if="store.menu_visible">
      <Menu/>
    </div>

    <div v-if="store.dictionary_visible">
      <Dictionary/>
    </div>

    <div v-if="store.words">
      <Word/>
    </div>

    <div v-if="store.words2">
      <Word/>
    </div>
  </div>
  <Tabs/>

</template>

<style scoped>
.header {
  font-size: 1.5rem;
  padding: 5px;
  height: 30px;
  position: sticky;
  top: 0;
  background-color: black;
  text-align: center;
}

.burger {
  position: fixed;
  left: 10px;
  top: 0px;
  font-size: 1.8rem;
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
