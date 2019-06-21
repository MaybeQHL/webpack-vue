

const routes = [
  { path: '/', redirect: { name: 'main' } }, // 重定向路由
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
]
export default routes