<script>
import { menu_visible, words1 } from './stores';
</script>

<div class="menu-item" on:click={() => {$words1 = true; $menu_visible = false;}}>
    words 0-500
</div>

<div class="menu-item">
    word list 2
</div>

<div class="menu-item">
    word list 3
</div>

<div class="menu-item">
    word list 4
</div>

<style>
    .menu-item {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 150px;
        background-color: #505d93;
        color: #fff;
        text-align: center;
        border-radius: 10px;
        margin: 5px;
        font-size: 1.5rem;
        /* gap: 10px; */
    }

    .menu-item:hover {
        opacity: 0.8;
        cursor: pointer;
    }
</style>