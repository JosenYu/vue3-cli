/*
 * @Author: yu li
 * @Date: 2022-06-16 23:35:39
 * @LastEditTime: 2022-06-16 23:52:37
 * @LastEditors: yu li
 * @FilePath: /vue3-cli/src/directives/modules/tt.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 */
const tt = {
  mounted(el: any) {
    console.log("text mounted");
    el.focus();
  },
};
export default tt;
