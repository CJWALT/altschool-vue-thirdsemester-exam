<template> 
<div> 
    <p> Count: {{count}} </p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
    <input type="number" v-model="value"/> 
    <button @click="setValue(value)">Set value</button>
  </div>
</template> 


<script>
      import useCounter from '@/composable/counter'

      export default{
        
        name: 'CounterApp',
        
        
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