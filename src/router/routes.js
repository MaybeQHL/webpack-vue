// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
import main from '@/views/main/main.vue'
const routes = [
  { path: '/', redirect: { name: 'sub' } }, // 重定向路由
  { path: '/login', name: 'login', component: () => import(/* webpackChunkName: "group-foo" */ '@/views/login/login.vue') },
  {
    path: '/main',
    name: 'main',
    component: main,
    children:
      [{
        path: 'sub',
        name: 'sub',
        component: () => import(/* webpackChunkName: "group-foo" */ '@/views/main/pages/sub.vue')
      },
      {
        path: 'res',
        name: 'res',
        component: () => import(/* webpackChunkName: "group-foo" */ '@/views/main/pages/ResDemo.vue')
      }
      ]
  }
]
export default routes