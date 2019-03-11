/**
 * 入口文件
 * @author maybe
 */
import Vue from 'vue';
import App from './App.vue';
import './libs/demo'
import router from './router'
import store from './store'
import api from './api' // 导入api接口
import '@/assets/common/reset.css'
// new Vue({ // 创建 vue 实例  有el实例
//   el: '#app', // 提供一个在页面上已经存在的 DOM 元素作为 Vue 实例挂载目标
//   render: (h) => h(App) // 声明了 html 中的内容
// })

Vue.prototype.$api = api; // 将api挂载到vue的原型上
// 创建 vue 实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")