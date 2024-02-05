<script>
	import Button from './../components/Button.svelte';

</script>

<section>
    <div id="image"><img src="Images/left_arrow.png" alt=""></div>
    <div id="header">
        <h2>KSA Izegem</h2>
    </div>

    <div id="form">
        <p>Jonghernieuwers</p>
        <div id="pf"><img src="Images/basic_2.png" alt=""></div>
        <p id="spna">Description</p>
        <p>This is a test game developed by the creators to tweak the layout of the application.</p>
        <form action="">
            <input type="text" placeholder="Enter Game id...">
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