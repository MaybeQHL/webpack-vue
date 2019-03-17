
<template>
  <div>
    <ul>
      <li>自定义组件 v-model </li>
      <li>{{'里面的值：'+ msg}}</li>
      <button @click="fn2">里面改变外面</button>
    </ul>
  </div>
</template>

<script>
/**
 * 自定义组件 v-model 
 */
// 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，
//  event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
// 默认情况下 value 是prop   input 作为事件
export default {

  model: {
    prop: 'msg',  // 这里的msg 是指 v-model 传入的值
    event: 'cc'   // 双向绑定触发的事件
  },
  props: {
    msg: '',   // 这里需要去props一个msg 
    value: String
  },
  methods: {
    fn2 () {
      this.$emit('cc', this.msg + 2)   // 这里的cc 
      // this.$emit('input', this.value + 2)
    }
  }
}
</script>