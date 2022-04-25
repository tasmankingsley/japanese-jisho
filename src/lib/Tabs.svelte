<script>

</script>

<div class="tabs">
    <span>1</span>
    <span>2</span>
    <span>3</span>
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
</style>