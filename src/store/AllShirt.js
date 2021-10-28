import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const allShirt = new Vuex.Store({
  state: {
    items: [
      {
        id:'00001',
        image:'img/camisa/camisa-00001.jpg',
        nome: 'Camisa Marvel',
        preco: '1020',
        parcela: '2x R$5,10' ,
        pequenaDescricao: 'Camisa Marvel de poliéste e algodão',
        descricao: 'Camisa marvel de poliéste e algodão',
        link:'camisaSelecionada',
        tamanho: ['P','M','G'],
      },
      {
        id:'00002',
        image:'img/camisa/camisa-00002.jpg',
        nome: 'Camisa Pokémon',
        preco: '2020',
        parcela: '2x R$10,10' ,
        pequenaDescricao: 'Description',
        descricao: 'Description',
        link:'camisaSelecionada',
        tamanho: ['P','M','G'],      
      },
      {
        id:'00003',
        image:'img/camisa/camisa-00003.jpg',
        nome: 'Camisa Avangers Infinity',
        preco: '3020',
        parcela: '2x R$15,10' ,
        pequenaDescricao: 'Description',
        descricao: 'Description',
        link:'camisaSelecionada',
        tamanho: ['P','M','G'],
      },
      {
        id:'00004',
        image:'img/camisa/camisa-00004.jpg',
        nome: 'Camisa Thor',
        preco: '4020',
        parcela: '2x R$20,10' ,
        pequenaDescricao: 'Description',
        fullDescription: 'Description',
        link:'camisaSelecionada',
        tamanho: ['P','M','G'],
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