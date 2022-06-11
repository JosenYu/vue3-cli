/*
 * @Author: yu li
 * @Date: 2022-06-11 15:55:03
 * @LastEditTime: 2022-06-11 15:55:16
 * @LastEditors: yu li
 * @FilePath: /vue3-cli/src/utils/auth.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 */

const TokenKey = "Token";

export function getToken() {
  return sessionStorage.get(TokenKey);
}

export function setToken(token: string) {
  return sessionStorage.set(TokenKey, token);
}

export function removeToken() {
  return sessionStorage.remove(TokenKey);
}
