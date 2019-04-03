<!--  -->
<template>
  <div>
    <p>回复组件</p>
    <hr>
    <div v-for="(item,index) in dataList"
         :key="item.id">
      <h2>{{item.name}} {{item.time}}</h2>
      <p>内容:{{item.content}}</p>
      <!-- <p>{{item.name}}的回复列表:
      </p> -->
      <br>
      <p v-for="subItem in item.reply"> {{subItem.name}}对{{item.name}}回复:{{subItem.content}}</p>
      <reply-area :commentId="index"
                  @addReply="addReply"></reply-area>
    </div>
    <hr>
    <reply-area :commentId="session.replyId"
                @addReply="addReply"></reply-area>
  </div>
</template>

<script>
import ReplyArea from "../compoents/ReplyArea.vue";
export default {
  data () {
    return {
      session: {
        name: '管理员',
        replyId: 0
      },
      dataList: [
        {
          id: 1,
          name: '张三',
          content: '张三回复的内容',
          level: 1,
          time: '2019年4月3日20:25:54',
          reply: [
            {
              id: 2,
              pId: 1,
              name: '王五',
              content: '王五回复的内容',
              level: 2,
              time: '2019年4月3日20:25:54',
            },
            {
              id: 3,
              pId: 1,
              name: '真素',
              content: '真素回复的内容',
              level: 2,
              time: '2019年4月3日20:25:54',
            }
          ]
        },
        {
          id: 5,
          name: '撒大声地',
          content: '撒大声地回复的内容',
          level: 1,
          time: '2019年4月3日20:25:54',
          reply: []
        }
      ]
    };
  },

  components: {
    ReplyArea
  },

  computed: {},

  mounted () { },

  methods: {
    addReply (text, id) {
      this.dataList[id].reply.push({
        id: Math.random(),
        pId: id,
        name: this.session.name,
        content: this.session.name + '回复的内容',
        level: 2,
        time: new Date,
      })
      console.log(text, id)
    }
  }
}

</script>
<style lang='less' scoped>
</style>