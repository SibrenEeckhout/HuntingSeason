<script>
    export let type = 'red';
    export let flat = false;
    export let inverse = false;
</script>

<button class={type} class:flat={flat} class:inverse={inverse}>
    <slot></slot>
</button>


<style>

    button{
        border: 0;
        cursor: pointer;
        border-radius: 6px;
        padding: 8px 12px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0, 0,0, 0.2);
    }

    .red{
        background-color: #C67C4E;
        color: white;
        width: 20rem;
        height: 5rem;
        font-size: 2rem;
        border-radius: 1rem;
    }

    .fullLength{
        background-color: #C67C4E;
        color: white;
        width: 90%;
 
    }

    .small{
        background-color: #C67C4E;
        color: white;
    }

    .green{
        background: #45c496;
        color: white;
    }

    .flat{
        box-shadow: none;
    }

    .red.inverse{
        color: #C67C4E;
        background-color: #0a1128;
        border: 2px solid;
    }

    .small.inverse{
        color: #C67C4E;
        background-color: #ffffff;
        border: 2px solid;
    }

    .red.inverse:hover{
        font-size: 1.2rem;
    }

    .green.inverse{
        color: #45c496;
        background-color: white;
        border: 2px solid #45c496;
    }

    @media (max-width: 1250px) {
        .red.inverse:hover{
            font-size: 0.8rem;
        }
    }

</style>