<!--  -->
<template>
  <div>sub
    <vm-demo v-model="testV"></vm-demo>
    外面的值 {{testV | myFilter}}
    <!-- <jsx-example></jsx-example> -->
    <p>render 测试</p>
    <render-test></render-test>
    <br>
    <br>
    <br>
    <p>测试换节点</p>
    <ul>
      <li v-for="(item,index) in dataList"
          :key="index">
        <ul>
          <li v-for="(subItem,subIndex) in item"
              :key="subIndex"
              class="subClass"
              @click="switchItem(index,subIndex)"
              :class="{active:tempData.s1.row === index && tempData.s1.col === subIndex}">{{subItem.name}} &nbsp;</li>
        </ul>
      </li>
    </ul>

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
      testV: '1',
      dataList: [
        [{ name: '张三' }, { name: '王五' }],
        [{ name: '李四' }, { name: '陈飞' }]
      ],
      tempData: {
        s1: {
          row: -1,
          col: -1
        }
      }
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
    },
    resetSwitchData () {
      this.tempData = {
        s1: {
          row: -1,
          col: -1
        }
      };
    },
    switchItem (row, col) {
      if ((this.tempData.s1.row === row && this.tempData.s1.col === col) || (this.tempData.s1.row === -1 && this.tempData.s1.col === -1)) {
        this.tempData.s1.row = row;
        this.tempData.s1.col = col;
      } else {
        let s1Row = this.tempData.s1.row;  // 第一次选择的行
        let s1Col = this.tempData.s1.col;  // 第一次选择的列
        let data1 = this.deepCopy(this.dataList[row][col])  // 默认对象是引用传递 必须深拷贝
        let data2 = this.deepCopy(this.dataList[s1Row][s1Col])  // 默认对象是引用传递 必须深拷贝
        this.$set(this.dataList[s1Row], s1Col, data1)
        this.$set(this.dataList[row], col, data2)
        this.resetSwitchData();
      }
      console.log(JSON.stringify(this.dataList))
    },
    deepCopy (obj) {
      var result = Array.isArray(obj) ? [] : {};
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === 'object') {
            result[key] = deepCopy(obj[key]);   //递归复制
          } else {
            result[key] = obj[key];
          }
        }
      }
      return result;
    }

  }
}

</script>
<style lang='less' scoped>
.subClass {
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  display: inline-block;
  text-align: center;
  line-height: 100px;
}
.active {
  border: 2px dashed #fff;
  // background: linear-gradient(to bottom, #ff1481, #ff5d3e);
  // background-origin: border-box;
  // border: 3px dotted green;
  // background: repeating-linear-gradient(
  //   135deg,
  //   transparent,
  //   transparent 1px,
  //   #000 1px,
  //   #000 1px
  // );
  // animation: shine 1s infinite linear;
}
@keyframes shine {
  0% {
    background-position: -1px -1px;
  }
  100% {
    background-position: -12px -12px;
  }
}
</style>