import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const homePage = new Vuex.Store({
  state: {
    items: [
      {
        id:'00001',
        image:'img/camisa/camisa-00001.jpg',
        name: 'Camisa Marvel',
        price: '10,20',
        description: 'Camisa marvel de polieste e algodão',
        tineDescription: 'Camisa marvel de polieste e algodão',
        link:'camisaSelecionada',
        size: ['p','m','g' ],
        color: ['vermelho']
      },
      {
        id:'00002',
        image:'img/camisa/camisa-00002.jpg',
        name: 'Camisa Pokémon',
        price: '20,20',
        description: 'Description',
        tineDescription: 'Description',
        link:'camisaSelecionada'
      },
      {
        id:'00003',
        image:'img/camisa/camisa-00003.jpg',
        name: 'Name',
        price: '30,20',
        description: 'Description',
        tineDescription: 'Description',
        link:'camisaSelecionada'
      },
      {
        id:'00004',
        image:'img/camisa/camisa-00004.jpg',
        name: 'Name',
        price: '40,20',
        description: 'Description',
        tineDescription: 'Description',
        link:'camisaSelecionada'
      },
    ],    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

export default homePage