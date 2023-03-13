<template>

<HeaderSection />
<div class="container">
   
    <div class="welcome-wrap">
        <p class="welcome-text"> Checkout my counter app with VueJS that performs
                increment, decrement, reset and set value functions.    
        </p>
        <router-link to="/counter" class="counter-link">Go to app</router-link>
    </div>
    

</div>

</template> 


<script> 

import HeaderSection from '../components/HeaderSection.vue'

export default { 
    name: 'HomeSection',

    components: { 
        HeaderSection
    }

}

</script>

<style> 



.welcome-wrap{ 
    display:flex; 
    flex-direction: column;
    align-items:center;
    gap:20px;
    justify-content: center;
    justify-self: center;
    overflow:hidden;
    padding:12rem 0;
    
}
.welcome-text{ 
    font-size:32px; 
    color:#101f8b;
    font-family:'Poppins', sans-serif;
    font-weight:600;
    text-align:center;
}
    a.counter-link{ 
        background:blue; 
        padding:10px 30px; 
        border-radius:10px;
        text-decoration:none; 
        font-family:'poppins', sans-serif; 
        font-size:18px; 
        color:white;
    }

    @media screen and (max-width:720px){ 


        .welcome-wrap{ 
            padding:8rem 0;    
            flex-direction: column;
        }
        .welcome-text{ 
            font-size:1.2rem;
        }
    }
</style>