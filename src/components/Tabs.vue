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
    <span>lists</span>
    <span>settings</span>
</div>

</template>

<style scoped>
.tabs {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(3, 1fr);
    position: fixed;
    height: 30px;
    line-height: 30px;
    width: 100%;
    bottom: 0;
    background-color: #000;
    text-align: center;
    font-size: 1.5rem;
    padding: 5px;
    margin: auto;
}

span:hover {
    cursor: pointer;
    background-color: #222

}
</style>