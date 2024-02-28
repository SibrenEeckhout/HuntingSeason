<script>
  import UserStore from '../stores/userStore.js';
	import Button from './../components/Button.svelte';
    import ApiService from "../API/apiService.js"
    export let updateNavigation;
    export let updateFromPreviousNavigation;
    export let potentialSession;
    let gameId = ''; 

    function handleClick(newNavigation) {
        updateNavigation(newNavigation);
    }

    function previousNavigation() {
        updateFromPreviousNavigation();
    }

    async function handleSubmit(event) {
    event.preventDefault(); 

    try {
        const userId = UserStore.retrieveIdFromCache();

        const data = {
            gameId: gameId // Include gameId in the request body
        };

        const response = await ApiService.post(`http://localhost:8000/sessions/session/join/${userId}`, data); // Remove gameId from the URL
        handleClick("home");
    } catch (error) {
        console.error('Error joining game:', error);
    }
}   

</script>

<section>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div id="image"><img src="Images/left_arrow.png" alt="" on:click={() => previousNavigation()}></div>
    <div id="header">
        <h2>{potentialSession.title}</h2>
    </div>

    <div id="form">
        <p>{potentialSession.subtitle}</p>
        <div id="pf"><img src="Images/basic_2.png" alt=""></div>
        <p id="spna">Description</p>
        <p>{potentialSession.description}</p>
        <form action="" on:submit={handleSubmit}>
            <input type="text" placeholder="Enter Game id..." bind:value={gameId}>
            <Button type="small" inverse={true}>Go back</Button>
            <Button type="small">Join</Button>
        </form>
    </div>
</section>

<style>
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

      #pf{
        width: 20rem;
        height: 20rem;
        margin: auto;
      }
  
      form{
          margin: auto;
          width: 20rem;
          display: flex;
          flex-direction: column;
      }

      #spna{
        font-weight: bold;
      }
</style>