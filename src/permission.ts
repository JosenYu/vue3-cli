/*
 * @Author: yu li
 * @Date: 2022-06-12 00:27:57
 * @LastEditTime: 2022-06-17 00:07:01
 * @LastEditors: yu li
 * @FilePath: /vue3-cli/src/permission.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 */
import router from "./router/index";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import { getToken } from "@/utils/auth";
import { useUserStore } from "@/store/user";

NProgress.configure({ showSpinner: false });
const whiteList = ["/login"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();
  // init store
  const userStore = useUserStore();
  // set page title
  document.title = import.meta.env.VITE_APP_TITLE;

  const hasToken = !!getToken();
  // determine whether the user has logged in
  if (hasToken) {
    if (to.path === "/login") {
      // if is logged in, redirect to the home page
      next();
      NProgress.done();
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      const hasRoles = userStore.roles && userStore.roles.length > 0;
      if (hasRoles) {
        next();
      } else {
        try {
          // get user info
          // NOTE: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          // await userStore.getInfo();

          // generate accessible routes map based on roles
          // const accessRoutes = await getInfo(roles);

          // dynamically add accessible routes
          // router.addRoutes(accessRoutes);

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true });
        } catch (error) {
          // remove token and go to login page to re-login
          await userStore.resetToken();
          next(`/login?redirect=${to.path}`);
        }
      }
      NProgress.done();
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`);
    }
    NProgress.done();
  }
});
