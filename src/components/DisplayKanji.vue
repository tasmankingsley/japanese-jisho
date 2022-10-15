<script setup>
import { store, display } from './store';


let title_temp = store.title;
store.title = 'Kanji';

function back() {
    store.title = title_temp;
    store.display_kanji = false;
}

</script>


<template>

<div class="grid">
    <span class="back" @click="back">↩︎</span>

    <div class="kanji">{{display.kanji.kanji}}</div>

    <span class="meaning kunyomi">
        <span style="color: #dc3c44;">Kunyomi: </span>
        {{display.kanji.kunyomi_ja}}
    </span>

    <span class="meaning onyomi">
        <span style="color: #dc3c44;">Onyomi: </span>
        {{display.kanji.onyomi_ja}}
    </span>

    <span class="meaning sense">
        <span style="color: #dc3c44;">Meaning: </span>
        {{display.kanji.kmeaning}}
    </span>
</div>

</template>


<style scoped>
.grid {
    display: grid;
    position: fixed;
    grid-auto-flow: row;
    grid-template-areas: 
                        'back'
                        'kanji'
                        'kunyomi'
                        'onyomi'
                        'sense';
    grid-template-rows: 50px 300px 60px 60px 60px;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    color: #fff;
    text-indent: 10px;
}

.kanji {
    font-size: 8rem; 
    color: #fff;
    place-self: center;
    grid-area: kanji;
}

.meaning {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.kunyomi { grid-area: kunyomi; }
.onyomi { grid-area: onyomi; }
.sense { grid-area: sense; }

.label {
    color: #dc3c44;
    font-size: 1.5rem;
}

span {
    color: #fff; 
    font-size: 1.5rem;
}

.back {
    grid-area: back;
    height: 50px;
    line-height: 43px;
    text-indent: 12px;
    font-size: 2.5rem;
    color: #99d2d4;
}

.back:hover {
    cursor: pointer;
    background-color: #16161d;
}

</style>
