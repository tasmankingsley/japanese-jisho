<script>
import jisho from './jmdict-eng-common.json';

let jisho1 = [];

for (let i = 0; i < 1000; i++) {
  jisho1[i] = jisho.words[i];
}

console.log(jisho1);

// export let id;
// export let word;
// export let description;

</script>

{#each jisho1 as jisho1}
    <div class="word">
        <!-- <span>ID: {jisho1.id}</span> -->
        <div class="kanji">
            <!-- <span>Kanji:</span> -->
            {#each jisho1.kanji as kanji}
                <span>{kanji.text},</span>
            {/each}
        </div>

        <div class="kana">
            <!-- <span>Kana:</span> -->
            {#each jisho1.kana as kana}
                <span>{kana.text},</span>
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
    grid-template-rows: repeat(3, 1fr);
    background-color: #bbb;
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
</style>