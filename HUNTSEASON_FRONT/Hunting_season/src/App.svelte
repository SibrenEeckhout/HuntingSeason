<script>
	import Onboarding from './screens/Onboarding.svelte';
	import Create from './screens/Create.svelte';
	import JoinWindow from './screens/JoinWindow.svelte';
  import Home from "./screens/Home.svelte";
  import LobbyHunter from './screens/Lobby_hunter.svelte';
  import Menu from './screens/Menu.svelte';
  import Endscreen from './screens/Endscreen.svelte';
  import Login from './screens/Login.svelte';
  import Register from './screens/Register.svelte';
  import CurrentSession from './screens/CurrentSession.svelte';
  import UserStore from './stores/userStore.js';
  import { onMount } from 'svelte';


  let selectedNavigation = "onboarding"
  let previousNavigation = ""

  let potentialSession = null; 

  function updateNavigation(newNavigation) {
    previousNavigation = selectedNavigation;
    selectedNavigation = newNavigation;
  }

  function updateFromPreviousNavigation(){
    updateNavigation(previousNavigation)
  }

  onMount(() => {
    try {
      const userId = UserStore.retrieveIdFromCache();
        if (userId != null) {
            updateNavigation("home");
        }else{
          throw new Error();
        }
    } catch (error) {
        console.error("Error occurred while checking cache:", error);
        updateNavigation("login");
    }
});

  function setSession(session){
    potentialSession = session;
    updateNavigation("join")
  }

</script>

<main>
  {#if selectedNavigation == "onboarding"}
  <Onboarding {updateNavigation}></Onboarding>
  {:else if selectedNavigation == "login"}
  <Login {updateNavigation} {updateFromPreviousNavigation}></Login>
  {:else if selectedNavigation == "register"}
  <Register {updateNavigation} {updateFromPreviousNavigation}></Register>
  {:else if selectedNavigation == "home"}
  <Home {updateNavigation} {updateFromPreviousNavigation} {setSession}></Home>
  {:else if selectedNavigation == "create"}
  <Create {updateNavigation} {updateFromPreviousNavigation}></Create>
  {:else if selectedNavigation == "lobby"}
  <LobbyHunter {updateNavigation} {updateFromPreviousNavigation}></LobbyHunter>
  {:else if selectedNavigation == "join"}
  <JoinWindow {updateNavigation} {updateFromPreviousNavigation} {potentialSession}></JoinWindow>
  {/if}
</main>

<style>

</style>