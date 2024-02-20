<script>
	import Register from './Register.svelte';
    import Button from "../components/Button.svelte";
    export let updateNavigation;
    export let updateFromPreviousNavigation;
  
    function handleClick(newNavigation) {
        updateNavigation(newNavigation);
    }

    function previousNavigation() {
        updateFromPreviousNavigation();
    }

</script>


<section>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div id="image"><img src="Images/left_arrow.png" alt="" on:click={() => previousNavigation()}></div>
    <div id="header">
        <h2>Register</h2>
    </div>
    <div id="form">
        <form action="">
            <input class="red" placeholder="Email">
            <input class="red" placeholder="Number">
            <input class="red" placeholder="Name">
            <input class="red" placeholder="Password">
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