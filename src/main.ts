/*
 * @Author: yu li
 * @Date: 2022-06-11 12:44:07
 * @LastEditTime: 2022-06-16 23:09:09
 * @LastEditors: yu li
 * @FilePath: /vue3-cli/src/main.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 */
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router/index";
import "./permission";
import App from "./App.vue";
// ant UI
import antD from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// directives
import directives from "@/directives/index";
import { setToken } from "./utils/auth";
setToken("admin");

const app = createApp(App);
const pinia = createPinia();
app.use(antD).use(router).use(pinia).use(directives).mount("#app");
