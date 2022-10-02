<script setup>
    import { store, nav, list } from './store';
    
    function select_list(num) {
      for (let i = 0; i < list.length - 1; i++) {
        list[i].visible = false;
      }
      list[num].visible = true; // select clicked list
      nav[3].visible = false; // hide this component
      store.words = true; // load words component
    }
    </script>
        
    <template>
    
    <div class="menu-item" @click="select_list(0)">0-1000 words</div>
    <div class="menu-item" @click="select_list(1)">1001-2000 words</div>
    <div class="menu-item" @click="select_list(2)">2001-3000 words</div>
    <div class="menu-item" @click="select_list(3)">3001-4000 words</div>
    <div class="menu-item" @click="select_list(4)">4001-5000 words</div>
    <div class="menu-item" @click="select_list(5)">5001-6000 words</div>
    <div class="menu-item" @click="select_list(6)">6001-7000 words</div>
    <div class="menu-item" @click="select_list(7)">7001-8000 words</div>
    <div class="menu-item" @click="select_list(8)">8001-9000 words</div>
    <div class="menu-item" @click="select_list(9)">9001-10000 words</div>
    
    
    </template>
    
    <style scoped>
    .menu-item {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 80px;
        background-color: #99d2d4;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        margin: 10px;
        font-size: 1.5rem;
        /* gap: 10px; */
    }
    
    .menu-item:hover {
        /* opacity: 0.9; */
        cursor: pointer;
        color: #99d2d4;
        background-color: #fff;
        
    }
    </style>