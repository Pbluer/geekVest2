<template>
  <div class="carrinho">
    <h1 class="aviso" v-show="carrinhoVazio">Nenhum item adicionado</h1>

    <div class="container" v-show="!carrinhoVazio">
      <div class="cardContainer animate__animated animate__fadeIn" v-for="(item,index) in items" :key="item.id">
        <div class="cardInfo">
          <img :src="item.image" :alt="item.nome" loading="lazy">
          
          <div class="descricao">
            <h1>{{ item.nome }}</h1>
            <p>Cor: Preta  - Tamanho: {{ item.tamanhoSelecionado }} </p>          
          </div>

          <div class="preco">
            <h1>{{ precoFormatado(item.preco) }}</h1>          
          </div>
        </div>
        <hr>        
        <div class="cardAction" @click="removerItem( index )">
          <button >Excluir</button>
        </div>
      </div>
      
    </div>
    <div class="finalizarPedido" v-show="!carrinhoVazio">
      <div class="valorTotal">
        <p>Total</p>
        <h2> {{ precoFormatado(precoTotal) }} </h2>
      </div>
      <button @click="finalizaPedido()">Finalizar pedido</button>      
    </div>
    
  </div>
</template>

<script>

import carrinho from '@/store/Carrinho.js' 

export default {
  name: 'carrinho',
  beforeMount(){
    this.carregaItems()
  },
  data: () => ({
    items:[],
    valorTotal: 0,
    carrinhoVazio: false
  }),
  methods: {
    carregaItems(){
      const item = carrinho.state.carrinho
     
      item.length === 0 ? this.carrinhoVazio = true : false

      this.items = carrinho.state.carrinho
    },
    removerItem( id ){
      carrinho.commit('removerItem', id )
      this.carregaItems()
    },
    finalizaPedido(){
      this.$router.push('finalizarPedido')
    },
    valorTotalTeste(){
      this.items.forEach( e => console.log(e.preco) )   
    }
  },
  computed: {
    precoTotal: () => {
      let valor = 0;
      carrinho.state.carrinho.forEach(element => {
        valor += parseFloat(element.preco)
      })     
      return valor;
     }
  }
}
</script>

<style lang="less" scoped>

  .carrinho {
    height: 99vh;
  }

  .aviso {
    margin-top: 100px;
    text-align: center;
    font-size: 1.5rem;
  }

  .container {
    padding-bottom: 50px;
  }

  .cardContainer {
    padding: 20px 10px;

    .cardInfo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba( 255, 255, 255, 0.25 );
      box-shadow: 0 8px 32px 0 rgba(218, 185, 190, 0.37);
      backdrop-filter: blur( 12.5px );
      border-radius: 10px;
      border: 1px solid #afafaf75;
      margin-bottom: 5px;
      padding: 0 3px;

      img {
        width: 20%;
        padding: 5px;
      }

      .descricao {
        text-align: center;

        h1 {
          font-size: 1.3rem;
        }

        p {
          margin: 0;
          font-size: .8rem;
        }
      }


      .preco {
        width: 100px;
              
        h1{
          color: green;
          font-size: 1.5rem;
        }

        h4 {
          font-size: .8rem;
        }
      }

      button {
        width: 35px;
        height: 50px;
        background-color: #ED0022;
        border-radius: 5px;
        color: #fff;
      }

    }

    hr {
      color: #1b2a5b;
      margin-bottom: 5px;
    }

    .cardAction {
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba( 255, 255, 255, 0.25 );
      box-shadow: 0 8px 32px 0 rgba(218, 185, 190, 0.37);
      backdrop-filter: blur( 12.5px );
      border-radius: 10px;
      border: 1px solid #afafaf75;

    }

  }

  .finalizarPedido  {
    width: 80vw;
    height: 50px;
    margin: 0 10%;
    position: fixed;
    bottom: 0;
    border-radius: 15px 15px 0 0 ;
    background-color: #1b2a5b;
    color: #fff;
    box-shadow: 0 0 3px #afafaf75;
    border-top: 2px solid #afafaf75;
    z-index: 1;
    margin-top: 50px;
    display: flex;

   
    button {
      width: 100%;
      text-align: center;
      &:hover {
       text-decoration: underline;
      }

    }

    .valorTotal {
      background-color:transparent;
      color: green;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      border-right: 2px solid #fff;
      flex-direction: column;

      p {
        color: #fff;
        margin: 0;
      }

      h2 {
        border-radius: 15px 0;
        font-size: 1.3rem;
        color: #fff;
        text-align: center;
        margin: 0;
      }

    }

  }

  @media screen and (min-width: 1024px) {

    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    .cardContainer {     
      margin: 0 auto;

      .cardInfo {
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 350px;
        
        img { width: 80% !important; }

      }

      hr { width: 300px; }

      .cardAction { 
        width: 300px;
        height: 50px;
        &:hover{
          background-color: #ED0022;
          color: #fff;
        }
      }
    }

    .finalizarPedido {
      width: 40vw;
      margin: 0 30%;
      
      &:hover {
        box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.459);
        border: nones;
      }

    }
  }

</style>