<template> 
    <HeaderSection/>
    <div class="container">
        <div class="nt-found-wrap">
            <div class="nt-found">
                <div class="not-found"> 
                <h1 class="nt-found-heading">404 page Not Found</h1>
                <p class="nt-found-para">Sorry, the page you're looking for does not exist</p>
            </div>
            <div class="img-banner">
                <img src= "@/assets/err.png" class="err-img" alt="error 404"/>
            </div>
                
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
        
        display:flex; 
        height: 80vh;
        margin:20px 0;
    }
    .nt-found{ 
        
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
    .err-img{ 
        width:80%;
    }



    @media screen and (max-width:820px){ 

        .nt-found-wrap{ 
            height:auto;    
        }
        .nt-found{ 
            flex-direction: column;
            gap:4rem;
        }
        .nt-found > div{ 
            width:auto;
        }
        .not-found{ 
            order:2;
        }
        .nt-found-heading{
            font-size:2.5rem;
        }
        .img-banner{ 
            order:1;
        }
    }
</style>