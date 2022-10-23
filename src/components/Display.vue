<script setup>
import { store, display } from './store';

let title_temp = store.title;
store.title = display.jisho.kana[0].text;

function back() {
    store.title = title_temp;
    store.display = false;
}

</script>


<template>

<div class="grid">
    <span class="back" @click="back">↩︎</span>
    <span v-for="(kanji, i) in display.jisho.kanji">
        <span class="label">Kanji {{i + 1}}: </span>
        {{kanji.text}}
    </span>
    <span v-for="(kana, i) in display.jisho.kana">
        <span class="label">Kana {{i + 1}}: </span>
        {{kana.text}}
    </span>
    <span v-for="(meaning, i) in display.jisho.sense">
        <span class="label">Meaning {{i + 1}}: </span>
        {{meaning.gloss[0].text}}
    </span>
</div>

</template>


<style scoped>
.grid {
    display: grid;
    align-content: flex-start;
    position: fixed;
    grid-auto-flow: row;
    row-gap: 20px;
    width: 100vw;
    height: calc(100vh - 70px);
    background-color: #000;
    color: #fff;
    padding: 10px;
    overflow-y: auto;
}

.label {
    color: #dc3c44;
    font-size: 1.5rem;
}

span {
    color: #fff; 
    font-size: 1.5rem;
    line-height: 2.2rem;
}

.back {
    height: 50px;
    width: calc(100% - 20px);
    border-radius: 5px;
    line-height: 43px;
    text-indent: 10px;
    font-size: 2.5rem;
    color: #99d2d4;
}

.back:hover {
    cursor: pointer;
    background-color: #16161d;
}

</style>