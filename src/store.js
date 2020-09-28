import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current: 'scooCard',
    refer: {
      rtitle: '',
      rlink: '',
      rimage: '',
      rbutton: '',
    }
  },
  getters: {
    getComp: state => {
      return state.current;
    },
    getRefer: state => {
      return state.refer
    }
  },
  mutations: {
    CHANGE_COMP: (state, card) => {
      return state.current = card
    },
    SET_REFER: (state, obj) => {
      return state.refer = obj
    }
  },
  actions: {

  }
})