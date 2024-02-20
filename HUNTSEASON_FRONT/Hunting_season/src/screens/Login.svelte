<script>
	import Register from './Register.svelte';
    import Button from "../components/Button.svelte";
    import ApiService from "../API/apiService.js"
    export let updateNavigation;
    export let updateFromPreviousNavigation;

    let email = ''; 
    let password = '';
  
    function handleClick(newNavigation) {
        updateNavigation(newNavigation);
    }

    function previousNavigation() {
        updateFromPreviousNavigation();
    }
  
    async function handleSubmit(event) {
    event.preventDefault(); 
    
    const formData = {
      email: email,
      password: password
    };

    try {
      const response = await ApiService.post('http://localhost:8000/login', formData);
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
          <h2>Login</h2>
      </div>
      <div id="form">
        <form on:submit={handleSubmit}>
            <input class="red" placeholder="Email" bind:value={email}>
            <input class="red" placeholder="Password" type="password" bind:value={password}>
              <Button type="small" >Login</Button>
          </form>
          <p>"Don’t have an account yet?"</p>
          <Button type="small" on:click={() => handleClick("register")}>Register Here</Button>
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