/*
 * @Author: yu li
 * @Date: 2022-06-11 15:51:57
 * @LastEditTime: 2022-06-12 02:05:11
 * @LastEditors: yu li
 * @FilePath: /vue3-cli/src/utils/request.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 */
import axios from "axios";
import { getToken } from "@/utils/auth";
// import { storeToRefs } from "pinia";

// import { useUserStore } from "@/store/user";
// const useStore = useUserStore();
const hasToken = false;
// const { getInfo } = useStore;

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config: any) => {
    // do something before request is sent
    if (hasToken) {
      // let each request carry token
      // ['Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers["Token"] = getToken();
    }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
