<script>
	import Button from '../components/Button.svelte';

</script>

<section>
    <div id="image"><img src="Images/left_arrow.png" alt=""></div>
    <div id="header">
        <h2>Make hunt</h2>
    </div>

    <div id="form">
        <form action="">
            <input type="text" placeholder="Title...">
            <input type="text" placeholder="Subtitle...">
            <input type="text" placeholder="Description">
            <input type="text" placeholder="Play Time...">
            <input type="text" placeholder="Time for ping...">
            <Button type="small" inverse={true}>Go back</Button>
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