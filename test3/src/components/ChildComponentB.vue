<template>
    <div>
      <h3>儿子B</h3>
      <p>计数: {{ counter }}</p>
      <button @click="incrementCounter">计数++</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['counter'],
    methods: {
      incrementCounter() {
        this.$emit('update-counter', 1);
      }
    }
  }
  </script>
  