// Vue 3 Router 配置
import { createRouter, createWebHistory } from 'vue-router';
import ParentComponent from '@/components/ParentComponent.vue';
import LoginComponent from '@/components/LoginComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ParentComponent
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/:catchAll(.*)', // 使用正则表达式定义通配符路由
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('user');
  if (to.name !== 'Login' && !isLoggedIn) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
