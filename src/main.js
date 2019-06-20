/**
 * 入口文件
 * @author maybe
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router'
import store from './store'

// 导入全局CSS
import '@/assets/common/reset.css'

// console.log(process.NODE.env);
// 导入注册全局组件、指令、过滤器
import compoents from '@/libs/compoents'
import filters from '@/libs/filters'
import directives from '@/libs/directives'
Vue.use(compoents)
Vue.use(filters)
Vue.use(directives)

// 创建 vue 实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")