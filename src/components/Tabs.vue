<script setup>
import { store } from './store';

function display_menu() {
    store.menu_visible = true;
    store.words1 = false;
    store.words2 = false;
}
</script>
    
<template>

<div class="tabs">
    <span @click="display_menu">home</span>
    <span>search</span>
    <span>settings</span>
</div>

<div class="ghost-tab"></div>

</template>

<style scoped>
.tabs {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(3, 1fr);
    position: fixed;
    height: 40px;
    line-height: 40px;
    width: 100%;
    bottom: 0;
    background-color: #000;
    text-align: center;
    font-size: 1.5rem;
    margin: auto;
    /* border-top: 3px solid #ef243c; */
    z-index: 1;
}

.ghost-tab {
    position: sticky;
    bottom: 0;
    opacity: 0;
    height: 40px;
    width: 100%;
    z-index: 0;
}

span:hover {
    cursor: pointer;
    background-color: #222

}
</style>