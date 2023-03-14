<template> 

    <footer>
        <div class="container">
            <small class="footer-txt"> &copy; <a href="https://github.com/cjwalt">cjwalt</a> 2023</small>
        </div>

    </footer>

</template> 

<script> 

    export default { 
        name: "FooterSection"
    }

</script> 

<style> 
    footer{ 
        position:absolute    ;
        width:100%;
        bottom:0;
        box-shadow: 0px .3px 3px 0px rgba(0, 0, 4, .75);
        margin-top:1rem;
        padding:20px 0;
    }
    small.footer-txt{
        font-size:1rem; 
        font-family:'mada', sans-serif;

        text-align:center;
        width:100%;
        /* border:1px solid red; */
    }
    /* @media screen and (max-width:720px){ 

        footer{ 
            bottom:0;
        }
    } */
</style>