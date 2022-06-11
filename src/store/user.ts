/*
 * @Author: yu li
 * @Date: 2022-06-11 15:14:57
 * @LastEditTime: 2022-06-11 16:37:34
 * @LastEditors: yu li
 * @FilePath: /vue3-cli/src/store/user.ts
 * @Description: 用户信息
 * @ReadMe: 产考资料，学习文献等...
 * https://juejin.cn/post/7107441811949355044
 */

import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
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
