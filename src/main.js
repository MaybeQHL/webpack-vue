/**
 * 入口文件
 * @author maybe
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router'
import store from './store'
import '@/assets/common/reset.css'
import compoents from '@/libs/compoents'
import filters from '@/libs/filters'
// import elementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/common/common.less'
Vue.use(compoents)
Vue.use(filters)
// Vue.use(elementUI);


// 创建 vue 实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")