<script>
import Word from './lib/Word.svelte';

let words = [];

for (let index = 0; index < 500; index++) {
  words[index] = {word: index, description: 'jhkhsoie clkhsowdn'};
}
</script>


<div class="header">Japanese Jisho</div>
<div class="grid">
  {#each words as word}
    <svelte:component this={Word}
      word={word.word}
      description={word.description}
    />
  {/each}
</div>


<style>
.header {
  font-size: 1.5rem;
  padding: 5px;
  height: 30px;
  position: sticky;
  top: 0;
  background-color: black;
  text-align: center;
}
.grid {
  display: grid;
  grid-auto-flow: row;
  color: black;
}
</style>