/*
 * @Author: yu li
 * @Date: 2022-06-11 14:21:07
 * @LastEditTime: 2022-06-11 15:45:48
 * @LastEditors: yu li
 * @FilePath: /vue3-cli/vite.config.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteCompression from "vite-plugin-compression";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", //打包路径
  plugins: [
    vue(),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
  // css
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/style/main.scss";',
      },
    },
  },
  // 配置别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  //启动服务配置
  server: {
    host: "0.0.0.0",
    port: 8080,
    open: true,
    https: false,
    proxy: {},
  },
});
