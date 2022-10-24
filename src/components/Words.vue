<script setup>
import { store, nav, list, display } from './store';
import { get } from "firebase/database";
import { db } from '../main';
// import local_db from '../jmdict-eng-common.json';
import localforage from 'localforage';

let jisho;

// for local testing
// jisho = local_db;


/////////////UNCOMMENT FOR PRODUCTION//////////////

// first checks if there is a local indexDB to use
await localforage.getItem('local_jisho').then((value) => {
    jisho = value;
    // console.log(jisho);
    store.fallback = false;

    if (jisho === null) {
        store.fallback = true;
    }
}).catch(function(err) {
    console.log(err);
});


// if there is no indexDB jisho will === null,
// in that case we will download a snapshot from firebase, and store it locally for next use (improves load times and firebase usage dramatically).
if (jisho === null) {
    await get(db).then((snapshot) => {
        if (snapshot.exists()) {

            jisho = snapshot.val();

            localforage.setItem('local_jisho', jisho).then((value) => {
                console.log(value);
            }).catch((err) => {
                console.log(err);
            });

            store.fallback = false;
        }
    }).catch((error) => {
        console.error(error);
    });
}


// If dictionary visible
if (nav[2].visible) {
    let found_count = 0;
    let filtered_search = [];
    store.jisho_filter = [];
    const re = new RegExp(store.search, 'i');
    

    for (let i = 0; i < jisho.words.length; i++) {
        if (re.test(jisho.words[i].sense[0].gloss[0].text)) {
            filtered_search[found_count] = jisho.words[i];
            found_count++;
        }
    }

    store.jisho_filter = filtered_search.map(item => {
        let points = 0;

        if (item.sense[0].gloss[0].text === store.search) {
            points++;
        }
        return {...item, points};

    }).sort((a, b) => b.points - a.points);

    console.log(store.jisho_filter);
}

// for each list check if selected - if true, filter list with corresponding start/end points
for (let l = 0; l < list.length; l++) {
    if (list[l].visible) {
        let count = 0;
        store.jisho_filter = [];

        for (let i = list[l].start; i < list[l].end; i++) {
            store.jisho_filter[count] = jisho.words[i];
            count++;
        }
    } 
}


function display_word(jisho) {
    store.display = true;
    display.jisho = jisho;

    console.log(display.jisho);
}


</script>

<template>

<div class="grid">

<div class="word" v-for="jisho in store.jisho_filter" @click="display_word(jisho)">
    <div class="kanji">
        <div v-for="(kanji, i) in jisho.kanji">
            <span v-if="i === 0">
                <span class="label">Kanji: </span>
                {{kanji.text}}
            </span>
        </div>
    </div>

    <div class="kana">
        <div v-for="(kana, i) in jisho.kana">
            <span v-if="i === 0">
                <span class="label">Kana: </span>
                {{kana.text}}
            </span>
        </div>
    </div>

    <div class="meaning">
        <div v-for="(sense, i) in jisho.sense">
            <span class="meaning-text" v-if="i === 0">
                <span class="label">Meaning: </span>
                {{sense.gloss[0].text}}
            </span>
        </div>
    </div>
</div>

</div>

</template>

<style scoped>
.grid {
    display: grid;
    grid-auto-flow: row;
}
.word {
    display: grid;
    grid-auto-flow: row;
    text-align: left;
    background-color: #0c0c12;
    color: #fff;
    font-size: 1.2rem;
    height: 120px;
    line-height: 40px;
    width: 100%;
    border-bottom: 4px solid #16161d;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.word:hover {
    background-color: #16161d;
    cursor: pointer;
}
.kanji {
    display: flex;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-left: 5px;
    margin-right: 5px;

}

.kana {
    display: flex;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-left: 5px;
    margin-right: 5px;

}

.meaning {
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-left: 5px;
    margin-right: 5px;
}

.meaning-text {
    display: inline-block;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.label {
    color: #dc3c44;
    font-size: 1rem;
}

</style>