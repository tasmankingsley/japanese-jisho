<script setup>
import { store } from './store';
import { reactive } from 'vue';


let search = reactive({val: ''});

function search_dict() {
    store.search = search.val;
    console.log(store.search)
    store.words = true;
}

function refresh() {
    search.val = '';
    store.words = false;
}


</script>
    
<template>

<div>
    <input type="text" v-model="search.val" @keydown.enter="search_dict" @click="refresh" @keydown.delete="refresh" placeholder="search"/>
</div>

</template>

<style scoped>
div {
    display: flex;
    justify-content: center;
}

input {
    width: 100%;
    height: 30px;
    text-align: center;
    padding: 5px;
    margin: 10px;
    line-height: 30px;
    font-size: 1.5rem;
    border-radius: 5px;
    border-style: none;
    
}
</style>
