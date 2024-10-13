<template>
    <div>
      <h2>待办事项</h2>
      <input v-model="newTodo" placeholder="输入新任务" />  <!-- 使用 v-model 绑定输入框 -->
      <button @click="handleAddTodo">添加</button>  <!-- 点击按钮添加新任务 -->
      <ul>
        <li v-for="(todo, index) in todos" :key="index">  <!-- 遍历待办任务列表 -->
          <span :class="{ completed: todo.completed }">{{ todo.text }}</span>  <!-- 显示任务文本，已完成任务加删除线 -->
          <button @click="toggleTodo(index)">标记完成</button>  <!-- 点击切换任务完成状态 -->
          <button @click="deleteTodo(index)">删除</button>  <!-- 点击删除任务 -->
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState, mapMutations } from 'vuex';
  
  export default {
    data() {
      return {
        newTodo: ''  // 用于存储新任务的输入
      };
    },
    computed: {
      ...mapState('todos', ['todos'])  // 从 Vuex store 中获取 todos 状态
    },
    methods: {
      ...mapMutations('todos', ['addTodo', 'deleteTodo', 'toggleTodo']),  // 映射 Vuex 的 mutation 方法
      handleAddTodo() {  
        if (this.newTodo.trim()) {  // 确保输入的任务不为空
          this.addTodo({ text: this.newTodo, completed: false });  // 调用 Vuex 的 addTodo mutation 添加任务
          this.newTodo = '';  // 清空输入框
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .completed {
    text-decoration: line-through;  /*添加删除线*/
  }
  </style>
  