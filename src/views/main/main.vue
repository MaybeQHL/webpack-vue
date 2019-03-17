<!--  -->
<template>
  <!-- <img src="~@/assets/test.jpg"
       alt=""
       srcset="">
  <section>
    <p>author:maybe</p>
    <p>QQ:1013480204</p>
  </section> -->
  <el-container style="height:100%;">
    <el-aside style="width:auto;">
      <side-menu :isCollapse="isCollapse"></side-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-radio-group v-model="isCollapse"
                        style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import SideMenu from './compoents/SideMenu.vue'
export default {
  data () {
    return {
      isCollapse: true
    };
  },

  components: {
    SideMenu
  },

  computed: {},

  mounted () {

  },

  methods: {

  }
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