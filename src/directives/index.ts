/*
 * @Author: yu li
 * @Date: 2022-06-16 22:54:50
 * @LastEditTime: 2022-06-17 00:05:38
 * @LastEditors: yu li
 * @FilePath: /vue3-cli/src/directives/index.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 */
function main(app: any) {
  // 引入一个文件夹下的所有文件
  const modulesFiles = import.meta.globEager("./modules/*.ts");
  for (const key in modulesFiles) {
    // ./modules/xxx.ts 转变成 xxx
    const name = key.replace(/^\.\/\w+\/(.*)\.\w+$/, "$1");
    const fun = modulesFiles[key].default || modulesFiles[key];
    app.directive(name, fun);
  }
}
main.install = main;
export default main;
