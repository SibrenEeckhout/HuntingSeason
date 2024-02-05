<script>
  import Button from "../components/Button.svelte";

</script>


<section>
    <section id="first">
        <div id="head">
            <h3>Sibren Eeckhout</h3>
            <div id="image"><img src="Images/vietnamface.JPG" alt=""></div>
        </div>
        
    </section>

    <div id="form">
        <form action="">
            <input class="red" placeholder="Name: Sibren Eeckhout">
            <input class="red" placeholder="Number: 0486 13 83 86">
            <input class="red" placeholder="Email: sibren.eeckhout@student.howest.be">
            <input class="red" placeholder="Password: Koas123!!">
            <Button type="small" >Change</Button>
        </form>
    </div>
</section>


<style>

    #first {
        height: 15rem;
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

        #form{
          width: 100%;
          text-align: center;
      }
  
      form{
          margin: 5rem auto;
          width: 20rem;
          display: flex;
          flex-direction: column;
      }



    @media (max-width: 1250px) {
        #head{
            padding: 0;
            margin-bottom: 3rem;
        }


        #first {
        height: 10rem;}

    }
</style>