<template>
  <div class="main">
    <h2 class="title">Webpack4 - vue - template </h2>
    <p> <img src="~@/assets/test.jpg"></p>
  </div>
</template>

<script>
export default {
  props: {

  },
  components: {

  },
  data () {
    return {

    };
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {

  },
};
</script>

<style scoped lang="scss">
.main {
  height: 100%;
  width: 100%;
  text-align: center;
  .title {
    font-size: 20px;
    margin: 0px auto;
    color: $themeColor;
    display: inline-block;
    height: auto;
  }
  img {
    width: 100px;
    height: auto;
  }
}
</style>
