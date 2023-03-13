<template> 

<HeaderSection/>
  <div class="container">
      <div class="counter-wrap">
        <div class="count-container">
          <p class="count-para"> Count: {{count}} </p>
          
          <div class="btn-wrap">
            <button @click="increment" class="btn">Increment</button>
            <button @click="decrement" class="btn">Decrement</button>
            <input type="number" v-model="value" class="input-field"/> 
            <button @click="reset" class="btn">Reset</button>
          
            <button @click="setValue(value)" class="btn">Set value</button>
          </div>
       </div>
    </div>
  </div>

  <FooterSection/>
  
</template> 


<script>
      import HeaderSection from '../components/HeaderSection.vue'
      import FooterSection from '../components/FooterSection.vue'
      import useCounter from '@/composable/counter'

      export default{
        
        name: 'CounterApp',
        
        components:{ 
          HeaderSection, 
          FooterSection,
        },
        setup(){ 
        const {count, increment, decrement, reset, setValue } = useCounter();
      
      return { 
        count, 
        increment, 
        decrement, 
        reset, 
        setValue,
        value: 0, 
  
      }
    }}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mada:wght@500&display=swap');
  .counter-wrap{ 
    margin-top:2rem;
    position:relative;
    display:flex; 
    justify-content: center;
    overflow:hidden;
    padding:50px 0;
    
  }
  .count-container{
    border-radius:8px;
    padding:30px 15px;
    /* height:10rem; */
    justify-self:center;
    align-self:center;
    box-shadow: .3px 0px 0px .4px rgba(0, 0, .4, .5);
    overflow:hidden;
  }
  .count-para{ 
    font-size:1.8rem; 
    font-weight:500;
    text-align:center; 
    color:#110fb8;
    font-family: 'mada', sans-serif ;
    padding-bottom:25px;

  }

  .btn-wrap{
    
    display:grid;
    grid-template-columns: auto auto;
    gap:2rem;
    padding:20px;
  }

  button, input{
    border:none; 
    display:block
  }

  .input-field{ 
    border-bottom:1px solid #110fba; 
    grid-column: 1/3;
    padding:8px; 
    color:#112fba; 
    font-size:1rem;
    font-family: 'poppins', sans-serif;
  }
  .btn{
    padding:10px 15px;
    border-radius:8px;
    box-shadow: 1px 0px 0px .1px rgba(0, 0, .4, .5);
    background:none;
    cursor:pointer;
    font-weight:400;
    font-family: 'mada', sans-serif;
    transition:all .3s ease;
}

.btn:hover{ 
  transform:scale(1.1);
  font-weight:600;
}
</style>