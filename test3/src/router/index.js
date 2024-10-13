// Vue 3 Router 配置
import { createRouter, createWebHistory } from 'vue-router';
import ParentComponent from '@/components/ParentComponent.vue';
import LoginComponent from '@/components/LoginComponent.vue';
import ChildComponentA from '@/components/ChildComponentA.vue';
import ChildComponentB from '@/components/ChildComponentB.vue';
const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/ParentComponent',
    name: 'ParentComponent',
    component: ParentComponent, 
  },
  {
    path: '/ChildA',
    name: 'ChildA',
    component: ChildComponentA, 
  },
  {
    path: '/ChildB',
    name: 'ChildB',
    component: ChildComponentB, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('user');  // 判断是否登录
  console.log('路由守卫检查:', { isLoggedIn, to });
  if (to.name !== 'Login' && !isLoggedIn) {
    alert('请先登录');  // 未登录时提醒
    next({ name: 'Login' });  // 重定向到登录页面
  } else {
    next();  // 继续导航
  }
});

export default router;
