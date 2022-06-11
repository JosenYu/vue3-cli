/*
 * @Author: yu li
 * @Date: 2022-06-11 16:15:17
 * @LastEditTime: 2022-06-11 16:19:40
 * @LastEditors: yu li
 * @FilePath: /vue3-cli/src/router/index.ts
 * @Description: 路由
 * @ReadMe: 产考资料，学习文献等...
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/pages/login/Login.vue"),
  },
];

const history = createWebHistory();
const router = createRouter({
  history: history,
  routes,
});

export default router;
