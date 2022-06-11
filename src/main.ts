/*
 * @Author: yu li
 * @Date: 2022-06-11 12:44:07
 * @LastEditTime: 2022-06-11 16:39:31
 * @LastEditors: yu li
 * @FilePath: /vue3-cli/src/main.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...

import.meta.env.DEV // 是否为开发环境
import.meta.env.PROD // 是否为生产环境
import.meta.env.MODE // 当前的环境，默认只有development和production，后续会介绍如何自定义
import.meta.env.SSR // 是否为服务端渲染
import.meta.env.BASE_URL // 基础路径
 */
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router/index";
import antD from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import App from "./App.vue";

const app = createApp(App);
app.use(antD).use(router).use(createPinia()).mount("#app");

console.log("当前运行环境", import.meta.env);
