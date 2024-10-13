import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [] // 待办事项列表
  },
  mutations: {
    // 修改state的mutation
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    REMOVE_TODO(state, index) {
      state.todos.splice(index, 1);
    },
    TOGGLE_TODO(state, index) {
      state.todos[index].completed = !state.todos[index].completed;
    }
  },
  actions: {
    // 异步操作，比如从服务器获取数据
    fetchTodos({ commit }) {
      setTimeout(() => {
        const todos = [
          { text: 'Learn Vuex', completed: false },
          { text: 'Build a project', completed: false }
        ];
        todos.forEach(todo => commit('ADD_TODO', todo));
      }, 1000);
    }
  },
  getters: {
    // 通过getters访问state中的数据
    completedTodos: (state) => {
      return state.todos.filter(todo => todo.completed);
    },
    todoCount: (state) => {
      return state.todos.length;
    }
  }
});
