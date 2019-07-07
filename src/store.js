import Vue from 'vue'
import Vuex from 'vuex'
import Home from './pages/Home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    navigation: {
      namespaced: true,
      state: {
        pageStack: [Home]
      },
      mutations: {
        push (state, page) {
          state.pageStack.push(page)
        },
        pop (state) {
          state.pageStack.pop()
        },
        reset (state) {
          state.pageStack = [Home]
        }
      }
    }
  }
})
