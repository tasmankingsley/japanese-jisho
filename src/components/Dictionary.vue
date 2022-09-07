<script setup>
import { store } from './store';
import { jisho } from "../main";

import { reactive, ref } from 'vue';

let search = reactive({val: ''});

function search_dict() {
    store.search = search.val;
    console.log(store.search)
    store.words = true;
}

function refresh() {
    store.words = false;
}


</script>
    
<template>
<input type="text" v-model="search.val" @keydown.enter="search_dict" @click="refresh" @keydown.delete="refresh"/>

</template>

<style scoped>
input {
    width: 100%;
    height: 30px;
    padding: 5px;
    line-height: 30px;
    font-size: 1.5rem;
}
</style>
