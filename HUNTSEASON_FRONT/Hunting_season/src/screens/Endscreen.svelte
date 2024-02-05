<script>
	import BottomNavigation from './../components/BottomNavigation.svelte';
  import Button from "../components/Button.svelte";

</script>


<section>
    <div id="image"><img src="Images/left_arrow.png" alt=""></div>
      <div id="header">
          <h2>Hunt ended</h2>
      </div>
      <div>
        <ul>
            <li class="red">Niels</li>
            <li class="red">Niels</li>
            <li class="red">Niels</li>
            <li class="red">Niels</li>
            <li class="green">Niels</li>
            <li class="green">Niels</li>
            <li class="green">Niels</li>
            <li class="green">Niels</li>
            <li class="green">Niels</li>
        </ul>
      </div>
      <p>“Did you survive?”</p>
      <Button type="small">Return to menu</Button>

      <BottomNavigation></BottomNavigation>
</section>


<style>

    h2{
        color: white;
    }
    section{
        text-align: center;
        background-image: url("Images/entry.png");
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

      li{
        width: 10rem;
        border-radius: 1rem;
      }

      .red{
        margin: 0.5rem auto 0.5rem auto;
        padding: 0.5rem;
        background-color: #C67C4E;
      }

      .green{
        margin: 0.5rem auto 0.5rem auto;
        padding: 0.5rem;
        background-color: rgb(40, 184, 40);
      }

      ul{
        padding: 0;
      }
</style>