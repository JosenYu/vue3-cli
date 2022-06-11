/*
 * @Author: yu li
 * @Date: 2022-06-11 15:14:57
 * @LastEditTime: 2022-06-11 16:19:49
 * @LastEditors: yu li
 * @FilePath: /vue3-cli/src/store/app.ts
 * @Description: 此应用的状态管理器
 * @ReadMe: 产考资料，学习文献等...
 * https://juejin.cn/post/7107441811949355044
 */

import { ref } from "vue";
import { defineStore } from "pinia";

export const useMainStore = defineStore("app", () => {
  const name = ref<string>("超级管理员");
  const nameLength = name.value.length;
  async function getInfo() {
    console.log(123);
  }
  return {
    name,
    nameLength,

    getInfo,
  };
});
