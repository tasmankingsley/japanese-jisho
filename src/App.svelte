<script>
import Word from './lib/Word.svelte';

// console.log(jisho.words[0].kana[0]);

// let jisho1 = [];

// for (let i = 0; i < 10; i++) {
//   jisho1[i] = jisho.words[i];
// }

// console.log(jisho1);


// let words = [];

// for (let index = 0; index < 500; index++) {
//   words[index] = {word: index, description: 'jhkhsoie clkhsowdn'};
// }
</script>


<div class="header">Japanese Jisho</div>
<div class="grid">
  <Word/>
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