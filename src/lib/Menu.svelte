<script>
import { menu_visible, words1, words2 } from './stores';
</script>

<div class="menu-item" on:click={() => {$words1 = true; $words2 = false; $menu_visible = false;}}>
    words 0-500
</div>

<div class="menu-item" on:click={() => {$words2 = true; $words1 = false; $menu_visible = false;}}>
    words 501-1000
</div>

<div class="menu-item">
    words 1001-1500
</div>

<div class="menu-item">
    words 1501-2000
</div>

<style>
    .menu-item {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 150px;
        background-color: #99d2d4;
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