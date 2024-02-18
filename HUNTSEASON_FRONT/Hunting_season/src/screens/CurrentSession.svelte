<script>
  import Button from "../components/Button.svelte";
import Player from "../components/Player.svelte";

let playerOrHunter = "hunter"
</script>

<section>
    <div id="map">

    </div>
    <div id="info">
        <h3>4 minutes left for new ping.</h3>
        <div>
            <ul>
                <li><Player type="orange-bar"></Player></li>
                <li><Player></Player></li>
                <li><Player type="orange-bar"></Player></li>
                <li><Player type="orange-bar"></Player></li>
                <li><Player></Player></li>
                <li><Player></Player></li>
                <li><Player type="orange-bar"></Player></li>
                <li><Player></Player></li>
            </ul>
        </div>
        <h3>1 hour and 40 minutes remaining.</h3>
        {#if playerOrHunter == "hunter"}
        <Button type="small">End hunt</Button>
        {:else}
        <Button type="small">Surrender</Button>
        {/if}
        
    </div>
</section>

<style>

    section{
        height: 100vh;
    }

    #map{
        height: 50vh;
    }

    #info{
        text-align: center;
    }

    #info ul {
        margin: 1rem auto 1rem auto;
        width: 20rem;
        padding: 0;
        height: 10rem;
        overflow: scroll;
        display: flex;
        flex-wrap: wrap;
    }
</style>