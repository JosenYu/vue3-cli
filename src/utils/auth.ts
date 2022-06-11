/*
 * @Author: yu li
 * @Date: 2022-06-11 15:55:03
 * @LastEditTime: 2022-06-12 01:36:35
 * @LastEditors: yu li
 * @FilePath: /vue3-cli/src/utils/auth.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 */

const TokenKey = "token";

export function getToken() {
  return sessionStorage.getItem(TokenKey);
}

export function setToken(token: string) {
  return sessionStorage.setItem(TokenKey, token);
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey);
}
