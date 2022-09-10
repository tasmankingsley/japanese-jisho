<script setup>
import { store } from './store'
import { get } from "firebase/database";
import { db } from '../main';


let jisho;

await get(db).then((snapshot) => {
  if (snapshot.exists()) {
    jisho = snapshot.val();
    console.log(snapshot.val());   
  }
}).catch((error) => {
  console.error(error);
});


let jisho_filter = [];
let jisho1 = [];

for (let i = 0; i < jisho.words.length; i++) {
    let found_count = 0;


    if (jisho.words[i].sense[0].gloss[0].text === store.search) {
        jisho1[found_count] = jisho.words[i];
        found_count++;
    }
    
}

console.log(jisho1);

// console.log(jisho);



</script>

<template>

<div class="word" v-for="jisho in jisho1">
    <!-- <span>ID: {jisho1.id}</span> -->
    <div class="kanji">
        <!-- <span>Kanji:</span> -->
        <div v-for="(kanji, i) in jisho.kanji">
            <span v-if="i === 0">{{kanji.text}}</span>
        </div>
    </div>

    <div class="kana">
        <!-- <span>Kana:</span> -->
        <div v-for="(kana, i) in jisho.kana">
            <span v-if="i === 0">{{kana.text}}</span>
        </div>
    </div>

    <div class="meaning">
        <!-- <span>Meaning:</span> -->
        <div v-for="sense in jisho.sense">
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
    grid-template-columns: repeat(3, 1fr);
    background-color: #000;
    color: #dc3c44;
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