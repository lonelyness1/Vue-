<template>
    <div>
      <h3>儿子B</h3>
      <p>计数: {{ counter }}</p>
      <button @click="incrementCounter">计数++</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['counter'],//接收组件的参数
    methods: {
      incrementCounter() {
        this.$emit('update-counter', 1);//调用父组件的函数改变counter的值
      }
    }
  }
  </script>
  