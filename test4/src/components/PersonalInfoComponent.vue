<template>
    <div>
      <h2>个人信息</h2>
      <label>姓名: <input v-model="newUserInfo.name" /></label>  <!-- 姓名输入框绑定 -->
      <label>邮箱: <input v-model="newUserInfo.email" /></label>  <!-- 邮箱输入框绑定 -->
      <button @click="addUserInfo">添加信息</button>  <!-- 点击按钮添加信息 -->
      
      <h3>已保存的用户信息:</h3>
      <div v-if="userInfoList && userInfoList.length">  <!-- 显示保存的用户信息列表 -->
        <div v-for="(user, index) in userInfoList" :key="index">
          <p>
            <strong>姓名:</strong> {{ user.name }}<br>
            <strong>邮箱:</strong> {{ user.email }}
            <button @click="updateUserInfo(index)">修改</button>  <!-- 点击修改用户信息 -->
            <button @click="deleteUserInfo(index)">删除</button>  <!-- 点击删除用户信息 -->
          </p>
        </div>
      </div>
      <div v-else>
        <p>没有保存的用户信息。</p>  <!-- 如果没有用户信息，显示提示 -->
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapMutations } from 'vuex';
  
  export default {
    data() {
      return {
        newUserInfo: { name: '', email: '' }  // 用于存储新用户信息的对象
      };
    },
    computed: {
      ...mapState('user', ['userInfoList'])  // 从 Vuex store 中获取用户信息列表
    },
    methods: {
      ...mapMutations('user', ['addUserInfo', 'updateUserInfo', 'deleteUserInfo']),  // 映射 Vuex 的 mutations
      addUserInfo() {
        if (this.newUserInfo.name && this.newUserInfo.email) {  // 确保姓名和邮箱不为空
          this.$store.commit('user/addUserInfo', { ...this.newUserInfo });  // 提交 mutation 添加用户信息
          this.newUserInfo = { name: '', email: '' };  // 清空输入框
        } else {
          alert('请填写姓名和邮箱');  // 提示用户填写信息
        }
      },
      updateUserInfo(index) {
        const updatedInfo = {
          name: prompt('请输入新姓名:', this.userInfoList[index]?.name),  // 弹出对话框修改姓名
          email: prompt('请输入新邮箱:', this.userInfoList[index]?.email)  // 弹出对话框修改邮箱
        };
        if (updatedInfo.name && updatedInfo.email) {
          this.$store.commit('user/updateUserInfo', { index, newInfo: updatedInfo });  // 提交 mutation 更新信息
        } else {
          alert('请填写姓名和邮箱');  // 提示用户填写完整信息
        }
      },
      deleteUserInfo(index) {
        this.$store.commit('user/deleteUserInfo', index);  // 提交 mutation 删除用户信息
      }
    },
    created() {
      // 模拟获取用户信息
      this.$store.dispatch('user/fetchUserInfo');
    }
  };
  </script>
  