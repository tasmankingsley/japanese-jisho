<script setup>
import { store } from './store';
</script>
    
<template>

<div class="menu-item" @click="() => {store.words1 = true; store.words2 = false; store.menu_visible = false;}">
    words 0-500
</div>

<div class="menu-item" @click="() => {store.words2 = true; store.words1 = false; store.menu_visible = false;}">
    words 501-1000
</div>


</template>

<style scoped>
.menu-item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 150px;
    background-color: #99d2d4;
    color: #fff;
    text-align: center;
    border-radius: 10px;
    margin: 5px;
    font-size: 1.5rem;
    /* gap: 10px; */
}

.menu-item:hover {
    opacity: 0.8;
    cursor: pointer;
}
</style>
    