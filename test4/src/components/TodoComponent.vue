<template>
    <div>
      <h1>Todo List</h1>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
          <button @click="toggleTodo(index)">Toggle</button>
          <button @click="removeTodo(index)">Delete</button>
        </li>
      </ul>
      <h2>Completed Todos: {{ completedTodos.length }}</h2>
      <h3>Total Todos: {{ todoCount }}</h3>
      <input v-model="newTodoText" placeholder="Add new todo">
      <button @click="addTodo">Add Todo</button>
    </div>
  </template>
  
  <script>
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
  
  export default {
    data() {
      return {
        newTodoText: ''
      };
    },
    computed: {
      ...mapState(['todos']),
      ...mapGetters(['completedTodos', 'todoCount'])
    },
    methods: {
      ...mapActions(['fetchTodos']),
      ...mapMutations(['TOGGLE_TODO', 'REMOVE_TODO', 'ADD_TODO']),
      addTodo() {
        if (this.newTodoText) {
          this.ADD_TODO({ text: this.newTodoText, completed: false });
          this.newTodoText = '';
        }
      }
    },
    mounted() {
      this.fetchTodos(); // 初始化时从服务器获取待办事项数据
    }
  }
  </script>
  
  <style scoped>
  .completed {
    text-decoration: line-through;
  }
  </style>
  