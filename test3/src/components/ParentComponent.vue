<template>
    <div>
      <h2>父组件</h2>
    
      <ChildComponentA :message="parentMessage" @child-event="handleChildEvent"/>
      <div>{{ childMessage }}</div>
      <ChildComponentB :counter="counter" @update-counter="updateCounter"/>
    </div>
  
  </template>
  
  <script>
  import ChildComponentA from './ChildComponentA.vue'
  import ChildComponentB from './ChildComponentB.vue'
  
  export default {
    data() {
      return {
        parentMessage: '父信息传给A',
        counter: 0,
        childMessage:'',
      }
    },
    components: {
      ChildComponentA,
      ChildComponentB
    },
    methods: {
      handleChildEvent(data) {
        this.childMessage=data;
      },
      updateCounter(value) {
        console.log("hjjhjjjj");
        
        this.counter += value;
      }
    }
  }
  </script>
  