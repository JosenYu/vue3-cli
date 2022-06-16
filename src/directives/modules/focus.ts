/*
 * @Author: yu li
 * @Date: 2022-06-16 23:03:18
 * @LastEditTime: 2022-06-16 23:33:36
 * @LastEditors: yu li
 * @FilePath: /vue3-cli/src/directives/modules/focus.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 */
const focus = {
  mounted(el: any) {
    console.log("focus mounted");
    el.focus();
  },
};
export default focus;
