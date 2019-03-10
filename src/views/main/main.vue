<!--  -->
<template>
  <div class="center">
    <img src="~@/assets/test.jpg"
         alt=""
         srcset="">
    <section>
      <p>author:maybe</p>
      <p>QQ:1013480204</p>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted () { },

  methods: {}
}

</script>
<style lang='less' scoped>
.center {
  // width: 400px;
  // margin: 0px auto;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  p {
    padding: 5px 0px;
  }
}
</style>