<script setup>
// import jisho from './jmdict-eng-common.json';
// import { jisho1 } from './stores';

let jisho1 = [];

// export let range_start;
// export let range_end;

for (let i = 0; i < 500; i++) {
  jisho1[i] = jisho.words[i];
}

console.log(jisho1);

</script>

<template>

<div class="word" v-for="jisho1 in jisho1">
    <!-- <span>ID: {jisho1.id}</span> -->
    <div class="kanji">
        <!-- <span>Kanji:</span> -->
        <div v-for="(kanji, i) in jisho1.kanji">
            <span v-if="i === 0">{{kanji.text}}</span>
        </div>
    </div>

    <div class="kana">
        <!-- <span>Kana:</span> -->
        <div v-for="(kana, i) in jisho1.kana">
            <span v-if="i === 0">{{kana.text}}</span>
        </div>
    </div>

    <div class="meaning">
        <!-- <span>Meaning:</span> -->
        <div v-for="sense in jisho1.sense">
            <div v-for="gloss in sense.gloss">
                <span>{{gloss.text}}</span>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped>
.word {
    display: grid;
    grid-auto-flow: row;
    /* grid-template-rows: repeat(3, 1fr); */
    background-color: #eee;
    font-size: 1.2rem;
    height: 90px;
    line-height: 30px;
    width: 100%;
    border-bottom: 2px solid #333;
}
.kanji {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-left: 5px;
    margin-right: 5px;
    font-weight: 400;
    font-size: 1.4rem;
}

.kana {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-left: 5px;
    margin-right: 5px;
    font-weight: 400;
}

.meaning {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-left: 5px;
    margin-right: 5px;
}

span {
    padding: 2px;
}
</style>