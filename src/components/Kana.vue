<script setup>
import { reactive } from 'vue';
import { hiragana, katakana } from './store';

let kana = reactive({
    switch: true,
    romaji: false
});


</script>
    
<template>
    <div class="kana-type" @click="kana.switch = !kana.switch">
        <span>{{kana.switch ? 'Hiragana' : 'Katakana'}}</span>
        <span class="kana-switch">{{!kana.switch ? 'Hiragana' : 'Katakana'}}</span>
    </div>

    <div class="grid">
        <div class="kana" v-for="item in kana.switch ? hiragana : katakana" :style="{'font-size': kana.romaji ? '2rem' : '3rem'}">
            <span @click="kana.romaji = !kana.romaji">
                {{kana.romaji ? item.romaji : item.kana}}
            </span>
        </div>
    </div>

</template>

<style scoped>
.grid {
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: 100px;
    grid-template-columns: repeat(5, 1fr);
    /* row-gap: 10px; */
    place-items: center;
    background-color: #0c0c12;
    color: #fff;
    margin: 5px;
    border-radius: 5px;
    /* width: 100%; */
}

.kana-type {
    font-size: 1.6rem;
    text-align: left;
    text-indent: 5px;
    cursor: pointer;
}

.kana {
    font-size: 3rem;
    color: #fff;
    /* width: 100%; */
}

.kana-switch {
    float: right; 
    margin-right: 5px; 
    color: #d90429;
}

span {
   cursor: pointer; 
}

</style>
    