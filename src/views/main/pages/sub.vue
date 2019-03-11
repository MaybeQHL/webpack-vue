<!--  -->
<template>
  <div>sub</div>
</template>

<script>
export default {
  data () {
    return {
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