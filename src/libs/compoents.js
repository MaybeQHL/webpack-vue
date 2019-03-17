import VMDemo from '@/compoents/VMDemo/VMDemo.vue'
import RenderTest from '@/compoents/RenderTest/RenderTest.vue'

/**
 * 全局组件的注册
 */
export default (Vue) => {
  Vue.component('vm-demo', VMDemo)
  Vue.component('RenderTest', RenderTest)
}