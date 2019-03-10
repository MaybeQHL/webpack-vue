import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state:{
   stateFirst:'this is first state'
  },
  getters:{

  },
  actions:{

  },
  mutations:{

  },
  modules: {
  },
  strict: debug, // **不要在发布环境下启用严格模式！
  // plugins: debug ? [createLogger()] : []  // 内置 Logger 插件 如果正在使用 vue-devtools，你可能不需要此插件。
})