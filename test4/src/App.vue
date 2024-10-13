<template>
  <div>
    <nav class="navbar">
      <router-link to="/">待办事项</router-link>
      <router-link to="/personal-info">个人信息</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

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
