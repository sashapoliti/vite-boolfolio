import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./components/AppHome.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: AppHome
        },
        {
            path: "/posts",
            name: "posts",
            component: PostList
        }
    ]
});

export { router };