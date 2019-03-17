<template>
  <div class="box">
    <router-view class="a"></router-view>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
    }
  },
  components: {
  },
  methods: {

  },
  created () {

  }
}
</script>
 
<style lang="less">
html,
body {
  &:extend(.box);
}
.box {
  height: 100%;
}
</style>