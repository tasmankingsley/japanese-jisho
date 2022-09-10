<script setup>
import { reactive } from 'vue';
import { store, nav, list } from './store';
import { get } from "firebase/database";
import { db } from '../main';
// import local_db from '../jmdict-eng-common.json';
// import localforage from 'localforage';


let jisho;

// for local testing
// let jisho = local_db;


// let db_store = localforage.getItem('jisho_store').then((value) => {
//     console.log(value);
// }).catch(function(err) {
//     console.log(err);
// });

// if (db_store === null) {
//     await get(db).then((snapshot) => {
//         if (snapshot.exists()) {
//         jisho = snapshot.val();

//         localforage.setItem('jisho_store', jisho).then((value) => {
//             console.log(value);
//         }).catch(function(err) {
//             console.log(err);
//         });

//         console.log(snapshot.val());   
//         }
//     }).catch((error) => {
//     console.error(error);
//     });
// } else {
//     jisho = db_store;
// }




// let jisho;
let jisho_filter = [];


await get(db).then((snapshot) => {
    if (snapshot.exists()) {
    jisho = snapshot.val();

    // localforage.setItem('jisho_store', jisho).then((value) => {
    //     console.log(value);
    // }).catch(function(err) {
    //     console.log(err);
    // });

    console.log(snapshot.val());   
    }
}).catch((error) => {
console.error(error);
});



// If dictionary visible
if (nav[2].visible) {
    let found_count = 0;
    jisho_filter = [];

    for (let i = 0; i < jisho.words.length; i++) {
        if (jisho.words[i].sense[0].gloss[0].text === store.search) {
            jisho_filter[found_count] = jisho.words[i];
            found_count++;
        }
    }
}

// for each list check if selected - if true, filter list with corresponding start/end points
for (let l = 0; l < list.length; l++) {
    
    if (list[l].visible) {
        let count = 0;
        jisho_filter = [];

        for (let i = list[l].start; i < list[l].end; i++) {
            jisho_filter[count] = jisho.words[i];
            count++;
            // console.log(jisho_filter[count]);
        }
    }

}

console.log(jisho_filter);

</script>

<template>

<div class="grid">

<div class="word" v-for="jisho in jisho_filter">
    <!-- <span>ID: {jisho1.id}</span> -->
    <div class="kanji">
        <span class="label">Kanji</span>
        <div v-for="(kanji, i) in jisho.kanji">
            <span v-if="i === 0">{{kanji.text}}</span>
        </div>
    </div>

    <div class="kana">
        <span class="label">Kana</span>
        <div v-for="(kana, i) in jisho.kana">
            <span v-if="i === 0">{{kana.text}}</span>
        </div>
    </div>

    <div class="meaning">
        <!-- <span class="label">Meaning</span> -->
        <div v-for="sense in jisho.sense">
            <div v-for="gloss in sense.gloss">
                <span class="meaning-text">{{gloss.text}}</span>
            </div>
        </div>
    </div>
</div>

</div>


</template>

<style scoped>
.grid {
    display: grid;
    grid-auto-flow: row;
    /* row-gap: 5px; */
}
.word {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: left;
    align-items: center;
    background-color: #0c0c12;
    color: #dc3c44;
    font-size: 1.2rem;
    height: 90px;
    line-height: 30px;
    width: 100%;
    border-bottom: 2px solid #fff;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.kanji {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-left: 5px;
    margin-right: 5px;

}

.kana {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-left: 5px;
    margin-right: 5px;

}

.meaning {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-left: 5px;
    margin-right: 5px;
}

.meaning-text {
    
}

.label {
    font-weight: 400;
}

span {
    padding: 2px;
}

.word:hover {
    background-color: #fff;
    cursor: pointer;
}
</style>