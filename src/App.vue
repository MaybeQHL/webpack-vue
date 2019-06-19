<template>
  <div class="app">
    <router-view></router-view>
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
.app {
  height: 100vh;
}
</style>