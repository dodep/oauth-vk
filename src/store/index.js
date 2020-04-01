import Vue from 'vue'
import Vuex from 'vuex'
import TheAuth from './modules/TheAuth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    TheAuth
  }
})
