<script>
export let type = 'green-bar';
</script>

<article>
    <p>User</p>
    <div class={type}></div>
</article>



<style>
/* Define the styles for the article element */
article {
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Define the styles for the p element */
p {
    margin: 0; /* Remove default margin */
}

/* Define the styles for the green bar */
.green-bar {
    width: 3rem; /* Adjust the width as needed */
    height: 10px; /* Adjust the height as needed */
    background-color: rgb(40, 184, 40);
    border-radius: 1rem;
}

.orange-bar{
    width: 3rem; /* Adjust the width as needed */
    height: 10px; /* Adjust the height as needed */
    background-color: #C67C4E;
    border-radius: 1rem;
}

</style>