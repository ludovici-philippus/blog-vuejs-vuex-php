import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PostView from "../views/PostView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/:slug',
        name: 'categorias',
        component: HomeView
    },
    {
        path: "/:slug_categoria/:slug_post",
        name: "post",
        component: PostView
    }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
