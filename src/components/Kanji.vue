<script setup>
import { store, display } from './store';
import kanji from '../kanji.json';

console.log(kanji);

let kanji_filter = [];
let count = 0;
for (let i = 0; i < kanji.length; i++) {
    
    if (kanji[i].kgrade === '1') {
        kanji_filter[count] = kanji[i];
        count++;
    }
}
kanji_filter.sort((a, b) => a.kstroke - b.kstroke);
// kanji_filter.sort((a, b) => a.kgrade - b.kgrade);
console.log(kanji_filter);


function display_kanji(kanji) {
    store.display_kanji = true;
    display.kanji = kanji;
}


</script>
    
<template>
    <div class="grid" v-for="kanji in kanji_filter" @click="display_kanji(kanji)">
        <div class="kanji-div">
            <span class="kanji">{{kanji.kanji}}</span>
            <span class="meaning">
                <span style="color: #dc3c44;">Kunyomi: </span>
                {{kanji.kunyomi_ja}}
            </span>
            <span class="meaning">
                <span style="color: #dc3c44;">Onyomi: </span>
                {{kanji.onyomi_ja}}
            </span>
            <span class="meaning">
                <span style="color: #dc3c44;">Meaning: </span>
                {{kanji.kmeaning}}
            </span>
        </div>
    </div>
</template>

<style scoped>
.grid {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    place-items: left;
    align-items: center;
    background-color: #0c0c12;
    color: #fff;
    font-size: 1rem;
    height: 120px;
    line-height: 40px;
    width: 100%;
    border-bottom: 4px solid #16161d;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.kanji-div {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 100px 1fr;
    grid-template-areas: 'a b'
                         'a b'
                         'a b';
    text-indent: 35px;
    text-align: left;
}

.kanji-div:hover {
    background-color: #16161d;
    cursor: pointer;
}

.kanji {
    font-size: 4rem; 
    color: #fff;
    grid-area: a;
    line-height: 120px;
}

.meaning {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 1.1rem;
}
</style>