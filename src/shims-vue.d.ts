/*
 * @Author: yu li
 * @Date: 2022-06-11 15:06:00
 * @LastEditTime: 2022-06-11 15:12:55
 * @LastEditors: yu li
 * @FilePath: /my-vue-app/src/shims-vue.d.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 */
declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
