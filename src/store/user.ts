/*
 * @Author: yu li
 * @Date: 2022-06-11 15:14:57
 * @LastEditTime: 2022-06-11 17:22:02
 * @LastEditors: yu li
 * @FilePath: /vue3-cli/src/store/user.ts
 * @Description: 用户信息
 * @ReadMe: 产考资料，学习文献等...
 * https://juejin.cn/post/7107441811949355044
 */

import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const token = ref<string>("超级管理员");
  const hasToken = !!token.value.length;
  function getInfo() {
    console.log(123);
  }
  return {
    token,
    hasToken,
    getInfo,
  };
});
