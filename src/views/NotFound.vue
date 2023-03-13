<template> 
    <HeaderSection/>
    <div class="container">
        <div class="not-found"> 
        <h1>404 page Not Found</h1>
        <p>Sorry, the page you're looking for does not exist</p>
    </div>
    </div>
    
</template>

<script> 

    import HeaderSection from '../components/HeaderSection.vue'

    export default{ 
        name: 'NotFound',

        components:{ 
            HeaderSection
        }
    }; 
</script> 