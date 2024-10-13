const state = { 
  userInfoList: []  // 初始化用户信息列表，存储用户信息的数组
};

const mutations = {
  addUserInfo(state, newInfo) {
    state.userInfoList.push(newInfo);  // 将新的用户信息对象添加到用户信息列表中
  },
  updateUserInfo(state, { index, newInfo }) {
    if (index >= 0 && index < state.userInfoList.length) {
      state.userInfoList[index] = newInfo;  // 更新指定索引处的用户信息
    }
  },
  deleteUserInfo(state, index) {
    if (index >= 0 && index < state.userInfoList.length) {
      state.userInfoList.splice(index, 1);  // 删除指定索引处的用户信息
    }
  }
};

const actions = {
  fetchUserInfo({ commit }) {
    // 模拟异步请求获取用户信息
    setTimeout(() => {
      // 模拟返回的用户信息，并将其添加到 store 中
      commit('addUserInfo', { name: '张三', email: 'zhangsan@example.com' });
    }, 1000);
  }
};

export default {
  namespaced: true,  // 开启命名空间，避免与其他模块冲突
  state,
  mutations,
  actions
};
