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
    <input type="text" v-model="search.val" @keydown.enter="search_dict" @input="store.words = false;" @keydown.delete="store.words = false;" placeholder="search"/>
    <span v-if="store.display === false" class="clear" @click="refresh">ⓧ</span>
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

.clear {
    position: absolute;
    right: 18px;
    top: 62px;
    font-size: 1.5rem;
    color: #757575;
}

.clear:hover {
    cursor: pointer;
    color: #000;
}
</style>
