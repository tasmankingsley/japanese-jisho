<script>
import Word from './lib/Word.svelte';

</script>


<div class="header">Nihongo no Jisho</div>
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