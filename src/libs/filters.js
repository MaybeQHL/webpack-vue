export default (Vue) => {
  /**
 * 全局过滤器的注册
 */
Vue.filter('myFilter', function (value) {
  // 返回处理后的值
  return  'filter';
})
}