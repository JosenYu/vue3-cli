/*
 * @Author: yu li
 * @Date: 2022-06-11 12:44:07
 * @LastEditTime: 2022-06-16 22:53:16
 * @LastEditors: yu li
 * @FilePath: /vue3-cli/src/vite-env.d.ts
 * @Description: vite 环境配置
 * @ReadMe: 产考资料，学习文献等...
REF:https://blog.csdn.net/SearchCXKCCTV/article/details/118758820
 */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_WEB_URL: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
