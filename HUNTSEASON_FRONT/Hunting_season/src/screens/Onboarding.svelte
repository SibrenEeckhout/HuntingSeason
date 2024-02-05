<script>
    import Button from "../components/Button.svelte";
  
  
  </script>
  
  
  <section>
      <div id="image">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="Images/entry.png" alt="entry">
      </div>
      <div id="text">
          <h2>“You can run, but you can't hide.”</h2>
          <p>Can you outmaneuver the hunter and secure your escape?"</p>
          <Button class="red">Get Started</Button>
      </div>
  </section>
  
  
  <style>


        section{
          height: 100vh;
          background-color: black;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
      }

      div{
        padding-top: 10rem;
      }
  
  
      #image {
        background-color: black;
        width: 30%;
        height: 60%;
        animation: bounce 1s infinite alternate;
        }

        img{
            border-radius: 1rem;
            box-shadow: rgba(255, 255, 255, 0.1) 0px 10px 50px;
        }

  
      #text{
          background-color: black;
          justify-content: center;
          text-align: center;
          width: 35%;
          height: 35%;
      }
  
      h2{
          padding-bottom: 0.1rem;
          font-weight: bold;
          color: white;
          font-size: 3rem;
      }
  
      p{
          padding-bottom: 1.5rem;
          color: #A9A9A9;
          font-size: 1.5rem;
      }


    @keyframes bounce {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-30px);
        }
    }

    @media (max-width: 1250px) {

        section{
            height: 100%;
        }

        #text{
            padding-top: 0rem;
            width: 90%;
            margin: 0rem 0rem 15rem 0rem;
        }

        #image{
            padding-top: 2.5rem;
            width: 90%;
        }

        h2{
            margin-top: 0rem;
        }
    }
    
  
  </style>