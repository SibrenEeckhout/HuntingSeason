<script>
  import Button from "./Button.svelte";


</script>

<li>
    <article>
        <div>
            <img src="Images/basic_1.png" alt="">
        </div>
        <div>
            <h3>KSA Izegem</h3>
            <p>Jonghernieuwers</p>
            <!-- svelte-ignore missing-declaration -->
            <Button type="fullLength">Join</Button>
        </div>
    </article>
</li>

<style>
    article{
        width: 15rem;
        height: 20rem;
        text-align: center;
        margin: 2rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;    }

    div:first-child{
        height: 10rem;
    }

    @media (max-width: 1250px) {
        article{
        width: 10rem;
        height: 16rem;
    }

    div:first-child{
        height: 8rem;
    }

    div:last-child{
        height: 12rem;
    }

    h3{
        margin-top: 0;
    }

    p{
        margin-top: 0;
    }
    }
</style>