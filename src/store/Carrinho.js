import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const carrinho = new Vuex.Store({
  state: {
    carrinho: [
    ],    
  },
  getters: {
    getItem: ( state ) => (id) =>{
      return state.items.filter( item => item.id === id ? item : '')
    }
  },
  mutations: {
    novoItem( state, item ){
      state.carrinho.push( item );
    }
  },
  actions: {
  },
  modules: {
  }
})

export default carrinho