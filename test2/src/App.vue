<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <h1 v-bind:title="message">数据</h1>
  </div>
  <div>
    <input v-model="inputValue" placeholder="请输入">
    <p>我双向绑定的: {{ inputValue }}</p>
  </div>
  <div>
    <p v-if="status === 'success'">你好</p>
    <p v-else-if="status === 'error'">不好</p>
    <p v-else-if="status==='unknown'">还行</p>
    <p v-else>问啊</p>

    <button @click="setStatus('success')">问好</button>
    <button @click="setStatus('error')">问不好</button>
    <button @click="setStatus('unknown')">咋样</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      message: '我被绑定了',
      inputValue: '',
      status: '',
    }
  },
  methods: {
    setStatus(newStatus) {
      this.status = newStatus;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
