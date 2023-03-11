<template> 


<header> 

    <div class="header-wrap">
        <img src="altschool.png" alt="altschool logo" class="header-logo">
        <ul class="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/counter">Counter</router-link>
            <router-link to="/notfound">errpage</router-link>
        </ul>
    </div>
    </header>
</template>

<script> 

export default{ 
    name:'HeaderSection'
}

</script> 

<style> 

</style>