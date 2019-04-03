<!--  -->
<template>
  <div>
    <div v-for="item in dataList"
         :key="item.id">
      <h2>{{item.name}} {{item.time}}</h2>
      <p>内容:{{item.content}}</p>
      <!-- <p>{{item.name}}的回复列表:
      </p> -->
      <br>
      <p v-for="subItem in item.reply"> {{subItem.name}}对{{item.name}}回复:{{subItem.content}}</p>
      <reply-area :commentId="item.id"
                  @addReply="addReply"></reply-area>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataList: []
  },
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
</style>