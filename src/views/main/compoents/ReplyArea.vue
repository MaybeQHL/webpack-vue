<!--  -->
<template>
  <div>
    <p>回复</p>
    <textarea name=""
              id=""
              cols="30"
              rows="10"
              v-model="replyText"
              v-show="isText"></textarea>
    <button @click="addReply">添加回复</button>
  </div>
</template>

<script>
export default {
  props: {
    commentId: Number
  },
  data () {
    return {
      replyText: '',
      isText: false
    };
  },

  components: {},

  computed: {},

  mounted () { },

  methods: {
    addReply () {
      if (this.isText) {
        this.$emit('addReply', this.replyText, this.commentId)
        this.isText = false;
      } else {
        this.isText = true;
      }

    }
  }
}

</script>
<style lang='less' scoped>
</style>