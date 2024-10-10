<template>
    <div>
      <h3>儿子A</h3>
      <p>{{ message }}</p>
      <button @click="sendMessageToParent">发信息给父亲</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['message'],
    methods: {
      sendMessageToParent() {
        this.$emit('child-event', 'A儿子发来信息');
      }
    }
  }
  </script>
  