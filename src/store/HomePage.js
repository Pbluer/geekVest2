import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const homePage = new Vuex.Store({
  state: {
    items: [
      {
        id:'00001',
        image:'img/camisa/camisa-00001.jpg',
        nome: 'Camisa Marvel',
        preco: '10.20',
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
        preco: '20.20',
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
        preco: '30.20',
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
        preco: '40.20',
        parcela: '2x R$20,10' ,
        pequenaDescricao: 'Description',
        fullDescription: 'Description',
        link:'camisaSelecionada',
        tamanho: ['P','M','G'],
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