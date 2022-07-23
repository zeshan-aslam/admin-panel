import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue';
import Content from '@/components/Content.vue';
import Dashboard from '@/components/Dashboard.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect:"/dashboard",
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/content",
      name: "content",
      component: Content,
    },
    
  ],
});

export default router;
