<template> 


<header> 

    <div class="container">

        <div class="header-wrap">
            <h2 class="header-logo"> <router-link to="/" class="header-link">
                Counter<span class="logo-color">App</span>
            </router-link>
         </h2>
        
        <ul class="nav">
            <li class="nav-list"><router-link to="/" class="link-list">Home</router-link></li>
            <li class="nav-list"><router-link to="/counter" class="link-list">Counter</router-link></li>
            <li class="nav-list"><router-link to="/notfound" class="link-list">errpage</router-link></li>
        </ul>
    </div>

    </div>

    
    </header>
</template>

<script> 

export default{ 
    name:'HeaderSection'
}

</script> 

<style> 
header{ 
    box-shadow: 0px .3px 5px 0px rgba(0, 0, .5, .75);
    border-radius:2px;
    
}
.header-wrap{ 
    display:flex; 
    flex-direction:row; 
    padding:20px 0;
    justify-content: space-between;
    align-items:center;
}

.header-link{
    font-size:2rem; 
    color:#101f8b;
    font-family: 'poppins', sans-serif;
    font-weight:600;
}
span.logo-color{ 
    color:#1011bc;
}


ul.nav li{ 
    display:inline; 
    text-decoration:none;
    margin-right:3rem;
}

li a{ 
    text-decoration:none;
    font-size:16px; 
    font-family:'mada', sans-serif; 
    font-weight:700; 
    color:#1018bf
}



@media screen and (max-width:720px){
    ul.nav{ 
        display:none;
    }
}

</style>