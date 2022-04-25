<script>
import Menu from './lib/Menu.svelte';
import Word from './lib/Word.svelte';
import Tabs from './lib/Tabs.svelte';
import { words1 } from './lib/stores';

</script>

<body>
  <div class="header">Nihongo no Jisho</div>
  
  <div class="grid">
    <!-- <Menu/> -->

    <!-- {#if $words1} -->
      <Word/>
    <!-- {/if} -->
  </div>
  <Tabs/>
</body>




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