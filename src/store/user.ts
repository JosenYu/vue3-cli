/*
 * @Author: yu li
 * @Date: 2022-06-11 15:14:57
 * @LastEditTime: 2022-06-12 01:53:19
 * @LastEditors: yu li
 * @FilePath: /vue3-cli/src/store/user.ts
 * @Description: 用户信息
 * @ReadMe: 产考资料，学习文献等...
 * https://juejin.cn/post/7107441811949355044
 */

import { ref } from "vue";
import { defineStore } from "pinia";
import { removeToken } from "@/utils/auth";
export const useUserStore = defineStore("user", () => {
  const token = ref<string | null>("超级管理员");
  // 权限
  const roles = ref<Array<string>>(["admin"]);
  // 获取用户信息
  function getInfo() {
    return new Promise<void>((resolve) => {
      roles.value = ["admin"];
      resolve();
    });
  }
  // NOTE:清除所有信息,包括token和用户信息
  function resetToken() {
    return new Promise<void>((resolve) => {
      token.value = null;
      roles.value.splice(0);
      removeToken();
      resolve();
    });
  }
  return {
    token,
    roles,
    getInfo,
    resetToken,
  };
});
