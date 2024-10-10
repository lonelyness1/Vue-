<template>
    <div>
      <h2>Login Page</h2>
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      login() {
        localStorage.setItem('user', 'logged-in');
        this.$router.push('/');
      }
    }
  }
  </script>
  