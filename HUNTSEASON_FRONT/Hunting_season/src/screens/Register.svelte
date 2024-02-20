<script>
	import Register from './Register.svelte';
    import Button from "../components/Button.svelte";
    import ApiService from "../API/apiService.js"
    export let updateNavigation;
    export let updateFromPreviousNavigation;
  
    let name = ''; 
    let password = '';
    let email = "";
    let number = "";

    function handleClick(newNavigation) {
        updateNavigation(newNavigation);
    }

    function previousNavigation() {
        updateFromPreviousNavigation();
    }

    async function handleSubmit(event) {
    event.preventDefault(); 
    
    const formData = {
      name: name,
      number: number,
      email: email,
      password: password
    };

    try {
      const response = await ApiService.post('http://localhost:8000/users/user', formData);
      
      handleClick("home");
    } catch (error) {
      console.error('Error registering user:', error);
    }
    }
</script>


<section>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div id="image"><img src="Images/left_arrow.png" alt="" on:click={() => previousNavigation()}></div>
    <div id="header">
        <h2>Register</h2>
    </div>
    <div id="form">
        <form action="" on:submit={handleSubmit}>
            <input class="red" placeholder="Email" bind:value={email}>
            <input class="red" placeholder="Number" bind:value={number}>
            <input class="red" placeholder="Name" bind:value={name}>
            <input class="red" placeholder="Password" bind:value={password}>
            <input class="red" placeholder="Repeat Password">
            <Button type="small" >Register</Button>
        </form>
        <p>“Already have an account?”</p>
        <Button type="small" on:click={() => handleClick("login")}>Login Here</Button>
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