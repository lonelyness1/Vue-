const state = {
  todos: []  // 初始化待办事项列表
};

const mutations = {
  addTodo(state, todo) {
    state.todos.push(todo);  // 将新任务对象添加到 todos 列表
  },
  deleteTodo(state, index) {
    state.todos.splice(index, 1);  // 删除指定索引处的任务
  },
  toggleTodo(state, index) {
    // 切换任务的完成状态（true/false）
    state.todos[index].completed = !state.todos[index].completed;
  }
};

const getters = {
  completedTodos: (state) => state.todos.filter(todo => todo.completed)  // 过滤并返回已完成的任务
};

export default {
  namespaced: true,  // 开启命名空间
  state,
  mutations,
  getters  // 使用 getters 获取已完成的任务列表
};
