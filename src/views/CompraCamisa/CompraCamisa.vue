<template>
  <div class="buy">

    <v-alert type="success" icon="mdi-cart-plus" class="alerta animate__animated animate__fadeInRight" v-show="alert"> Item adicionado </v-alert>

    <div class="container">
      <h1> {{ item.nome }} </h1>

      <img :src="item.image" :alt=" item.nome ">

      <p id="quantidade">Quantidade: {{ item.quantidade }}</p>

      <div class="primeiraInfo">
        <h3>R$ {{item.preco }} <span>ou {{ item.parcela }}</span> </h3>
      </div>
      
      <div class="containerTamanho">
        <h2>Tamanho:</h2>        
        <div v-for="size in item.tamanho" :key="size">
          <input type="radio" :id="size" :value="size" v-model="tamanhoSelecionado">                 
          <label :for="size"> {{size}}</label>
        </div>          
      </div>
     
      <div class="segundaInfo">
        <button id="carrinho" @click="adicionarNoCarrinho">
          <v-icon>mdi-cart-plus</v-icon>
        </button>
        <button id="descricao" @click=" descricaoMobile = !descricaoMobile " > Descrição </button>
      </div>

      <v-bottom-sheet v-model="descricaoMobile" id="descricaoMobile">
        <div class="containerDescricaoMobile">
          <div class="headerSheet">
            <h3>Descrição</h3>
          </div>
          <div class="bodySheet">
            <p>{{ item.description }}</p>
          </div>
          <div class="footerSheet">
            <button @click=" descricaoMobile = !descricaoMobile "> X </button>
          </div>
        
        </div>
      </v-bottom-sheet>
    </div>
  </div>
</template>

<script>

import allShirt from '@/store/AllShirt.js' 
import carrinho from '@/store/Carrinho.js' 

export default {
  name: 'buy' ,
  beforeMount(){
    this.carregaItems()
  },
  data: () => ({
    descricaoMobile: false,
    item: {
      image:null,
      nome: null,
      preco: null,      
      parcela: null,      
      description: null,
      tamanho: null,
      quantidade: null
    },
    tamanhoSelecionado: null,
    alert: false
  }),
  methods: {
    carregaItems(){
      let item = allShirt.getters.getItem( this.$route.params.id )
      
      var { image, nome, preco, parcela, descricao, tamanho, estoque } = item[0]

      this.item.image = '../' + image
      this.item.nome =  nome
      this.item.preco = preco
      this.item.parcela = parcela
      this.item.description = descricao
      this.item.tamanho = tamanho
      this.item.quantidade = estoque
    },
    adicionarNoCarrinho(){
      const item = {
        id: this.$route.params.id,
        image: this.item.image,
        nome: this.item.nome,
        preco: this.item.preco,
        tamanhoSelecionado: this.tamanhoSelecionado,
        quantidade: this.quantidade  
      }
      carrinho.commit('novoItem', item )
      
      this.alert = true  
      setTimeout(() => { this.alert = false }, 2000 )

    }
  }
}
</script>

<style lang="less" scoped>

  .alerta {
    position: absolute;
    margin-top: 15px;
    right: 15px;
  }

  .container {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 20px;

    h1 {
      font-size: 2rem;
      margin-bottom: 15px;
    }

    img {
      width: 80%;
      border-radius: 15px;
      padding: 10px;
      background-color: rgb(228, 228, 228);
      box-shadow: 0 0 3px rgb(83, 83, 83);
    }

    #quantidade {
      margin: 5px 0 0 0;
      color: gray;
      font-weight: 400;
    }

    .primeiraInfo {
      margin-top: 5px;
      display: flex;
      justify-content: center;
      width: 300px;
      align-items: center;
      margin-bottom: 10px;

      h1 {
        font-size: 1.3rem;
      }

      h3 {
        color: green;
        font-size: 1.5rem;

        span {
          color: black;
          font-size: 1rem;
        }
      }

    }

    .containerTamanho {
      width: 300px;
      display: flex;
      padding-right: 5vw ;   

      h2 {
        font-size: 1.2rem;
        margin-right: 10px;
      }      
      div { 
        margin: 5px;

        label {
          margin: 20px;
        }
        
        input[type="radio"] { display: none;}

        input[type="radio"]:checked+label{
          background-color: #ED0022;
          color: #fff;
          border-radius: 15px;
          padding: 2px 6px;
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.281);
        }

      }
    }

    .segundaInfo {
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 300px;
      margin-top: 10px;

      #descricao {
        width: 150px;
        height: 30px;
        border-radius: 15px;
        background: #1b2a5b;
        color: #fff;
      }
      
      #carrinho{
        padding: 15px;
        border-radius: 100%;
        background-color: green;

        i {color: white;}       
        
      }

    }

  }

  .containerDescricaoMobile {
    display: flex;
    flex-direction: column;
    background-color: #fff;

    .headerSheet {
      padding: 15px 0;
      border-bottom: 3px solid #1b2a5b;
      background-color: #ED0022;
      h3 {
        text-align: center;
        font-size: 1.5rem;
        color: white;
      }

    }
    
    .bodySheet {
      padding: 20px 10px;
      text-align: center;
    }

    .footerSheet {
      display: flex;
      justify-content: center;
      height: 40px;

      button {        
        color: #1b2a5b;
        font-size: 1.3rem;
      }
    }

  }
</style>