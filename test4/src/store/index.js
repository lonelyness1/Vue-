import { createStore } from 'vuex';
import todos from './modules/todos';
import user from './modules/user';

export default createStore({
  modules: {
    todos,  // 将 todos 模块注册到全局 store
    user    // 将 user 模块注册到全局 store
  }
});
