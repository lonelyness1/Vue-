<template>
  <div>
    <h2>登录</h2>
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  setup() {

  }
  ,
  methods: {
    login() {
      localStorage.setItem('user', 'logged-in');  // 模拟登录，设置用户登录状态
      // 登录后跳转到之前想去的页面，默认跳转到 ParentComponent 页面
      this.$router.push({ name: 'ParentComponent' });
    }
  }
}
</script>
