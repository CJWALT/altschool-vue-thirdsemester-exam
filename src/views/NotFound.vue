<template> 
    <HeaderSection/>
    <div class="container">
        <div class="nt-found-wrap">
            <div class="not-found"> 
                <h1 class="nt-found-heading">404 page Not Found</h1>
                <p class="nt-found-para">Sorry, the page you're looking for does not exist</p>
            </div>
            <div class="img-banner">
                <img src= "@/assets/err.png" class="err-img" alt="error 404"/>
            </div>
            
        </div>
    </div>
    <FooterSection/>
    
</template>

<script> 

    import HeaderSection from '../components/HeaderSection.vue'
    import FooterSection from '../components/FooterSection.vue'

    export default{ 
        name: 'NotFound',

        components:{ 
            HeaderSection, 
            FooterSection
        }
    }; 
</script> 

<style> 

    img{ 
        width:100%;
        height:auto;
    }
    .not-found{ 
        width:45%;
        align-self:center;
    }
    .nt-found-wrap{ 
        margin-top:2rem;
        display:flex;
        flex-direction: row;
        gap:5%;
       justify-content: center;
    }

    .nt-found-heading{ 
        font-size:3.5rem;
        font-family: 'Poppins', sans-serif;
        font-weight:600;
        color:#112fb8;
    }
    .nt-found-para{ 
        font-size:1rem; 
        font-family: 'Poppins', sans-serif;
        font-weight:400; 
        color:#1011fb;
    }
    .img-banner{ 
        width:50%; 
        align-self:center;
    }



    @media screen and (max-width:720px){ 

        .nt-found-wrap{ 
            flex-direction: column;
            gap:4rem;
        }
        .nt-found-wrap > div{ 
            width:auto;
        }
        .not-found{ 
            order:2;
        }
        .img-banner{ 
            order:1;
        }
    }
</style>