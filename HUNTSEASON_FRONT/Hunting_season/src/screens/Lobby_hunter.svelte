<script>
	import Player from './../components/Player.svelte';
	import Button from '../components/Button.svelte';

</script>

<section>
    <div id="image"><img src="Images/left_arrow.png" alt=""></div>
    <div id="header">
        <h2>Lobby</h2>
    </div>
    <h3>KSA Izegem</h3>
    <h3>GameId: koas123</h3>
    <div>
        <div id="hunter">
            <h4>Hunter</h4>
            <div>
                <Player></Player>
            </div>
        </div>
        <div id="Players">
            <h4>Players</h4>
            <div>
                <ul>
                    <li><Player></Player></li>
                    <li><Player></Player></li>
                    <li><Player></Player></li>
                    <li><Player></Player></li>
                </ul>
            </div>
        </div>
    </div>
    <div id="form">
        <Button type="small" inverse={true}>Go back</Button>
        <Button type="small">Make hunt</Button>
    </div>
</section>

<style>

    section{
        align-items: center;
        text-align: center;
    }
    #header{
          width: 100%;
          display: flex;
          justify-content: center;
      }
  
      #image{
          position: absolute;
          width: 2rem;
          height: 2rem;
          margin: 1rem;
          cursor: pointer;
      }

      #form{
          width: 100%;
          text-align: center;
      }

      h3{
        margin: 0.5rem;
      }

  

      ul{
        width: 10rem;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
      }

</style>