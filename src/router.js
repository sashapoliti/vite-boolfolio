import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import PostList from "./pages/PostList.vue";

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
        },
        {
          path: "/posts/:slug",
          name: "single-post",
          component: PostComponent,
        },
        {
          path: "/:pathMatch(.*)*",
          name: "not-found",
          component: NotFound,
        }
    ]
});

export { router };