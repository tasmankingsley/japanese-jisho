<script setup>
import { reactive } from 'vue';
import { hiragana, katakana } from './store';

let kana = reactive({
    switch: true
});


</script>
    
<template>
    <div class="kana-type" @click="kana.switch = !kana.switch">{{kana.switch ? 'Hiragana' : 'Katakana'}}</div>

    <div class="grid">
        <div class="kana" v-for="item in kana.switch ? hiragana : katakana">
            <span>{{item.kana}}</span>
        </div>
    </div>

</template>

<style scoped>
.grid {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 30px;
    place-items: center;
    background-color: #0c0c12;
    color: #fff;
    margin: 3px;
    /* width: 100%; */
}

.kana-type {
    font-size: 1.6rem;
    text-align: left;
    text-indent: 5px;
    cursor: pointer;
}

.kana {
    font-size: 3.2rem;
    color: #fff;
    /* width: 100%; */
}

</style>
    