<template> 


<header> 

    <div class="container">

        <div class="header-wrap">
            <h2 class="header-logo"> <router-link to="/" class="header-link">
            Counter<span class="logo-color">App</span>
            </router-link>
            </h2>

            <ul  v-show="!mobile" class="nav">
                <li class="nav-list"><router-link to="/" class="link-list">Home</router-link></li>
                <li class="nav-list"><router-link to="/counter" class="link-list">Counter</router-link></li>
                <li class="nav-list"><router-link to="/notfound" class="link-list">errpage</router-link></li>
            </ul>
            <span @click="toggleMobileNav" :class="{'icon-active' : mobileNav}" v-show='mobile' class="icon"></span>
        

            <transition name="mobile-nav"> 

                <ul  v-show="mobileNav" class="show-nav">
                    <li class="nav-list"><router-link to="/" class="link-list">Home</router-link></li>
                    <li class="nav-list"><router-link to="/counter" class="link-list">Counter</router-link></li>
                    <li class="nav-list"><router-link to="/notfound" class="link-list">errpage</router-link></li>
                </ul>

            </transition>
        
        </div>

    </div>

    
    </header>
</template>

<script> 

export default{ 
    name:'HeaderSection',

   data(){ 
        return{
            mobile:null,
            mobileNav: null,
            windowWidth:null,
        };
    },

    created(){ 
        window.addEventListener('resize', this.screenResize);
        this.screenResize()
    },

    methods:{ 
        toggleMobileNav(){ 
            this.mobileNav = !this.mobileNav
        },
        screenResize(){ 
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 750){ 
                this.mobile = true;
                return; 
            }
                this.mobile = false;
                this.mobileNav= false;
            return;
        }

    }

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

li .link-list{ 
    text-decoration:none;
    font-size:16px; 
    font-family:'mada', sans-serif; 
    font-weight:700; 
    color:#1018bf
}
span.icon{ 
    border:1px solid red; 
    width:40px;
    height:40px; 
    background:blue; 
    cursor:pointer;
}


.show-nav{ 
    position:absolute; 
    display:flex; 
    flex-direction: column;
    justify-content: center;
    /* align-items:center; */
    gap:30px;
    width:300px; 
    max-width:250px;
    z-index:99;
    top:0; 
    left:0;
    height:400px; 
    padding:15px 30px; 
    background:#18b2f1; 
}

.nav-list{ 
    list-style: none;
}

.link-list{ 
    color:#fff; 
    font-size:2rem; 
    font-weight:500;
    text-align:center;
    font-family: 'Poppins', sans-serif;
    transition: .3s ease all;
}

.link-list:hover{ 
    border-bottom:2px solid #101f8b;
}


/* @media screen and (max-width:720px){
    ul.nav{ 
        display:none;
    }
} */

</style>