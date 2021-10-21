import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const allShirt = new Vuex.Store({
  state: {
    items: [
      {
        id:'00001',
        image:'img/camisa/camisa-00001.jpg',
        name: 'Camisa Marvel',
        price: '10,20',
        tineDescription: 'Camisa marvel de polieste e algodão',
        fullDescription: 'Camisa marvel de polieste e algodão',
        link:'buyTshirt',
        size: ['P','M','G']
      },
      {
        id:'00002',
        image:'img/camisa/camisa-00002.jpg',
        name: 'Camisa Pokémon',
        price: '20,20',
        tineDescription: 'Description',
        fullDescription: 'Description',
        link:'buyTshirt',
        size: ['P','M','G']
      },
      {
        id:'00003',
        image:'img/camisa/camisa-00003.jpg',
        name: 'Name',
        price: '30,20',
        tineDescription: 'Description',
        fullDescription: 'Description',
        link:'buyTshirt',
        size: ['P','M','G']
      },
      {
        id:'00004',
        image:'img/camisa/camisa-00004.jpg',
        name: 'Name',
        price: '40,20',
        tineDescription: 'Description',
        fullDescription: 'Description',
        link:'buyTshirt',
        size: ['P','M','G']
      },
    ],    
  },
  getters: {
    getItem: ( state ) => (id) =>{
      return state.items.filter( item => item.id === id ? item : '')
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

export default allShirt