<script>
	import Button from '../components/Button.svelte';
    import UserStore from '../stores/userStore.js';
    import ApiService from "../API/apiService.js"
    export let updateNavigation;
    export let updateFromPreviousNavigation;
    let title = ''; 
    let subtitle = '';
    let description = '';
    let playTime = 0;
    let pingtime = 0;
  
    function handleClick(newNavigation) {
        updateNavigation(newNavigation);
    }

    function previousNavigation() {
        updateFromPreviousNavigation();
    }

    async function handleSubmit(event) {
    event.preventDefault(); 

    const formData = {
        title: title,
        subtitle: subtitle,
        description: description,
        playTime: playTime,
        pingtime: pingtime
    };

    try {
      const userId = UserStore.retrieveIdFromCache(); 
      const response = await ApiService.post(`http://localhost:8000/sessions/session/${userId}`, formData);

      console.log(response);
    } catch (error) {
      console.error('Error creating session:', error);
    }

    }
</script>

<section>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div id="image"><img src="Images/left_arrow.png" alt="" on:click={() => previousNavigation()}></div>
    <div id="header">
        <h2>Make hunt</h2>
    </div>

    <div id="form">
        <form action="" on:submit={handleSubmit}>
            <input type="text" placeholder="Title..." bind:value={title}>
            <input type="text" placeholder="Subtitle..." bind:value={subtitle}>
            <input type="text" placeholder="Description" bind:value={description}>
            <input type="number" placeholder="Play Time..." bind:value={playTime}>
            <input type="number" placeholder="Time for ping..." bind:value={pingtime}>
            <Button type="small" inverse={true} on:click={() => previousNavigation()}>Go back</Button>
            <Button type="small">Make hunt</Button>
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


  
      form{
          margin: auto;
          width: 20rem;
          display: flex;
          flex-direction: column;
      }

</style>