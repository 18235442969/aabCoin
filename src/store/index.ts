import Vue from 'vue'
import Vuex, { ActionTree, MutationTree } from 'vuex'
import app from './modules/app'
// import 'babel-polyfill'

Vue.use(Vuex)


export default new Vuex.Store({
  strict: true,
  modules: {
    app
  }
})
