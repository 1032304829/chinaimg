// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import register from './page/register';
import login from './page/login';
import index from './page/index';
import 'common/stylus/index.styl';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

// 定义路由
const routes = [
    {
      path: '/register',
      component: register
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/index',
      component: index
    }
];
// 创建实例
const router = new VueRouter({
   linkActiveClass: 'active',
   routes: routes
});
/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app');

// router.push('/index');
