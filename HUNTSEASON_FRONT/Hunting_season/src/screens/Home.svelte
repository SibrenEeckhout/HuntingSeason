<script>
	import Session from './../components/Session.svelte';
    import UserStore from '../stores/userStore.js';
    import ApiService from "../API/apiService.js"
    import {onMount} from "svelte";
    export let updateNavigation;
    export let setSession;
    
    let name = ''; 
    let sessions = []; 

    function handleClick(newNavigation) {
        updateNavigation(newNavigation);
    }

    onMount(async () => {
        try {
            const userId = UserStore.retrieveIdFromCache(); // Retrieve the user ID from the cache
            const token = UserStore.retrieveTokenFromCache(); // Retrieve the token from the cache

            const responseUser = await ApiService.get(`http://localhost:8000/users/user/id/${userId}`, null, token);
            name = responseUser[0].name;

            const responseSessions = await ApiService.get(`http://localhost:8000/sessions`, null, null);
            sessions = responseSessions;
        } catch (error) {
            console.error('Error logging in:', error);
            name = "Guest";
        }
    });

    function handleJoinSession(event) {
    const sessionData = event.detail;
        setSession(sessionData);
    }

</script>

<section id="container">
    <section id="first">
        <div id="head">
            <h3>{name}</h3>
            <div id="image"><img src="Images/vietnamface.JPG" alt=""></div>
        </div>
        <input type="text" placeholder="Search sessions...">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div id="split" on:click={() => handleClick("create")}>
            <div id="hunter">
                <p id="red">Become</p>
                <p id="become">The hunter</p>
            </div>
        </div>
    </section>
    <section id="second">
        <ul>
            {#each sessions as session} 
                <Session session={session} on:joinSession={handleJoinSession}></Session> 
            {/each}
        </ul>
    </section>
</section>

<style>

    #container{
        height: 100vh;
    }

    #first {
        height: 30rem;
        padding-bottom: 2rem;
        background: rgb(0, 0, 0);
        background: linear-gradient(191deg, rgba(0, 0, 0, 1) 38%, rgba(87, 87, 87, 1) 100%);
        text-align: center;
        position: relative; /* Added position relative for section */
    }

    #head {
        display: flex;
        justify-content: right;
        padding: 4rem;
    }

    #image {
        width: 4rem;
        height: 4rem;
        border-radius: 1rem;
        margin: 1.5rem;
    }

    img {
        border-radius: 0.5rem;
    }

    h3 {
        font-size: 2rem;
        color: white;
    }

    input {
        background-color: #313131;
        border: none;
        width: 30rem;
        border-radius: 0.5rem;
        padding-left: 3rem;
        background-image: url('Images/plus.png');
        background-repeat: no-repeat;
        background-position: 0.3rem center;
        background-size: 1.5rem;
    }

    input::placeholder {
        color: #989898;
    }

    #split {
        width: 100%;
        align-items: center;
        position: relative; /* Added position relative for split */
    }

    #hunter {
        cursor: pointer;
        position: absolute;
        width: 42.5rem;
        height: 25rem;
        background-image: url("Images/hunter.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        border-radius: 1rem;
        text-align: left;
        margin-top: 2rem; /* Half of the height */
        left: 50%; /* Center horizontally */
        transform: translateX(-50%); /* Center horizontally */
        z-index: 1; /* Ensure the hunter div is below other content */
    }

    #red {
        position: absolute;
        margin: 1rem;
        background-color: #ed5151;
        font-size: 1rem;
        color: white;
        font-weight: bold;
        border-radius: 1rem;
        padding: 0.2rem 0.5rem 0.2rem 0.5rem;
    }

    #become {
        position: absolute;
        margin-top: 20rem;
        margin-left: 1.5rem;
        font-size: 2.5rem;
        font-weight: bold;
        color: white;
        background-color: black;
        padding: 0.2rem;
    }


    #second{
       margin-top: 15rem;
       width: 80%;
       margin: 15rem auto;
    }

    #second ul {
        padding: 0;
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        height: 40rem; /* Set a fixed height for the ul */
        overflow-y: auto; /* Enable vertical scrolling */
    }

    @media (max-width: 1250px) {
        #head{
            padding: 0;
            margin-bottom: 3rem;
        }

        input{
            width: 90%;
        }

        #hunter{
            width: 90%;
            height: 15rem;
        }

        #first {
        height: 21rem;}

        #become {
            margin-top: 11rem;
            font-size: 2rem;
        }

        #second{
            margin-top: 10rem;
            width: 100%;
            margin-left: 0;
            margin-right: 0;
        }

        #second ul {
            height: 20rem;
        }
    }


</style>
