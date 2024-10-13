<template>
  <div>
    <nav class="navbar">
      <router-link v-if="!isLoggedIn" to="/">登录</router-link>
      <router-link to="/ParentComponent">父组件</router-link>
      <router-link to="/ChildA">子组件A</router-link>
      <router-link to="/ChildB">子组件B</router-link>
      <a v-if="isLoggedIn" href="#" @click.prevent="logout">登出</a>

    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: !!localStorage.getItem('user')  // 初始化时判断是否登录
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('user');  // 清除登录状态
      this.isLoggedIn = false;  // 更新登录状态
      this.$router.push({ name: 'Login' });  // 跳转回登录页面
    }
  },
  watch: {
  '$route'() {
    this.isLoggedIn = !!localStorage.getItem('user');
  }
}

}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  background-color: #f4f4f4;
  border-bottom: 2px solid #ddd;
}
.navbar a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s;
}
.navbar a:hover {
  background-color: #ddd;
}
</style>
