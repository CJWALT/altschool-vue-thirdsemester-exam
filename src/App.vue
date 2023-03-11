<template>
  <div class='app'>
    
    <HeaderSection/>

    <router-view/>
    <!-- <p> App Component </p> -->
  </div>

</template>

<script>
 import HeaderSection from './components/HeaderSection.vue'

  export default {
    name:'App', 

    components:{ 
      HeaderSection
    }
     
  }
</script>

<style>


</style>
