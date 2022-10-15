<script setup>
import Nav from './components/Nav.vue';
import Home from './components/Home.vue';
import Dictionary from './components/Dictionary.vue';
import Lists from './components/Lists.vue';
import Kana from './components/Kana.vue';
import Kanji from './components/Kanji.vue';
import Words from './components/Words.vue';
import { store, nav } from './components/store';
import Display from './components/Display.vue';
import DisplayKanji from './components/DisplayKanji.vue';

function toggle_nav() {
  nav[0].visible =  !nav[0].visible;
}


</script>

<template>
  <Nav/>

  <div class="header">
    <span class="burger" @click="toggle_nav">{{!nav[0].visible ? '=' : '⤫'}}</span>
    <span>{{store.title}}</span>
  </div>
  
  <div class="grid">
    <div v-if="store.display">
      <Display/>
    </div>

    <div v-if="store.display_kanji">
      <DisplayKanji/>
    </div>

    <div v-if="nav[1].visible">
      <Home/>
    </div>

    <div v-if="nav[2].visible">
      <Dictionary/>
    </div>

    <div v-if="nav[3].visible">
      <Lists/>
    </div>

    <div v-if="nav[4].visible">
      <Kana/>
    </div>

    <div v-if="nav[5].visible">
      <Kanji/>
    </div>

    <div v-if="nav[6].visible">

    </div>

    <div v-if="store.words">
      <Suspense>
        
        <Words/>

        <template #fallback>
          <span class="loading">loading...</span>
        </template>
        
      </Suspense>
    </div>

  </div>

  <!-- <Tabs/> -->
</template>

<style scoped>
.header {
  font-size: 1.5rem;
  height: 50px;
  line-height: 50px;
  position: sticky;
  top: 0;
  background-color: black;
  text-align: center;
}

.loading {
  display: grid;
  margin-top: 100px;
  font-size: 1.5rem;
  place-items: center;
}

.burger {
  position: fixed;
  left: 10px;
  top: 0px;
  font-size: 50px;
  line-height: 43px;
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
