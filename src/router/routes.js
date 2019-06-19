

const routes = [
  { path: '/', redirect: { name: 'main' } }, // 重定向路由
  { path: '/main', name: 'main', component: () => import('@/views/main.vue') },
]
export default routes