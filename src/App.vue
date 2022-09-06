<script setup>
import Menu from './components/Menu.vue';
import Word from './components/Word.vue';
import Tabs from './components/Tabs.vue';
import { store } from './components/store';

</script>

<template>
  <div class="header">Japanese Jisho</div>
  
  <div class="grid">
    <div v-if="store.menu_visible">
      <Menu/>
    </div>

    <div v-if="store.words1">
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
.grid {
  display: grid;
  grid-auto-flow: row;
  color: black;
}
</style>
