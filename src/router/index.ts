/*
 * @Author: yu li
 * @Date: 2022-06-11 16:15:17
 * @LastEditTime: 2022-06-16 23:14:08
 * @LastEditors: yu li
 * @FilePath: /vue3-cli/src/router/index.ts
 * @Description: 路由
 * @ReadMe: 产考资料，学习文献等...
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login",
  },
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  {
    path: "/:pathMatch(.*)*",
    redirect: "/notFound",
  },
  {
    path: "/notFound",
    name: "NotFound",
    component: () => import("@/pages/NotFound.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/login/LoginPage.vue"),
  },
  {
    path: "/homePage",
    name: "HomePage",
    component: () => import("@/pages/HomePage.vue"),
  },
];

const history = createWebHistory();
const router = createRouter({
  history: history,
  routes,
});

export default router;
