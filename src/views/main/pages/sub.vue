<!--  -->
<template>
  <div>sub
    <vm-demo v-model="testV"></vm-demo>
    外面的值 {{testV | myFilter}}
    <!-- <jsx-example></jsx-example> -->
    <p>render 测试</p>
    <render-test></render-test>
  </div>
</template>

<script>
// Vue.component('jsx-example', {
//   render (h) { // <-- h must be in scope
//     return <div id="foo">bar</div>
//   }
// })
export default {
  data () {
    return {
      testV: '1'
    };
  },
  components: {},

  computed: {},

  mounted () {
    this.getArticleDetail()
  },
  methods: {
    async  getArticleDetail () {
      try {
        let result = await this.$api.article.articleDetail(1, {
          api: 123
        });
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    }
  }
}

</script>
<style lang='less' scoped>
</style>