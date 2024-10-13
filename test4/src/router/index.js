import { createRouter, createWebHistory } from 'vue-router';
import TodoComponent from '@/components/TodoComponent.vue';
import PersonalInfoComponent from '@/components/PersonalInfoComponent.vue';

const routes = [
  { path: '/', name: 'Todo', component: TodoComponent },
  { path: '/personal-info', name: 'PersonalInfo', component: PersonalInfoComponent }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
