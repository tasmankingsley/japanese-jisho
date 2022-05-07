<script>
import jisho from './jmdict-eng-common.json';
// import { jisho1 } from './stores';

let jisho1 = [];

// export let range_start;
// export let range_end;

for (let i = 0; i < 500; i++) {
  jisho1[i] = jisho.words[i];
}

console.log(jisho1);

</script>

{#each jisho1 as jisho1}
    <div class="word">
        <!-- <span>ID: {jisho1.id}</span> -->
        <div class="kanji">
            <!-- <span>Kanji:</span> -->
            {#each jisho1.kanji as kanji, i}
                {#if i === 0}
                    <span>{kanji.text}</span>
                {/if}
            {/each}
        </div>

        <div class="kana">
            <!-- <span>Kana:</span> -->
            {#each jisho1.kana as kana, i}
                {#if i === 0}
                    <span>{kana.text}</span>
                {/if}
            {/each}
        </div>

        <div class="meaning">
            <!-- <span>Meaning:</span> -->
            {#each jisho1.sense as sense}
                {#each sense.gloss as gloss}
                        <span>{gloss.text},</span>
                {/each}
            {/each}
        </div>
    </div>
{/each}

<style>
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