import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const carrinho = new Vuex.Store({
  state: {
    carrinho: [
    ],    
  },
  getters: {
  },
  mutations: {
    novoItem( state, item ){
      
      state.carrinho.push( item );
    },
    removerItem( state, index ){
      state.carrinho.splice( index , 1 )
    },
    limparCarrinho( state ){
      state.carrinho.remove()
    }
  },
  actions: {
  },
  modules: {
  }
})

export default carrinho