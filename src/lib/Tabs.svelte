<script>
import { menu_visible, words1, words2 } from './stores';

function display_menu() {
    $menu_visible = true;
    $words1 = false;
    $words2 = false;
}
</script>


<div class="tabs">
    <span on:click={display_menu}>home</span>
    <span>lists</span>
    <span>settings</span>
</div>

<style>
.tabs {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(3, 1fr);
    position: fixed;
    height: 30px;
    line-height: 30px;
    width: 100%;
    bottom: 0;
    background-color: #000;
    text-align: center;
    font-size: 1.5rem;
    padding: 5px;
    margin: auto;
}

span:hover {
    cursor: pointer;
    background-color: #222

}
</style>