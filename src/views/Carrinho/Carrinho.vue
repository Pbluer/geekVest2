<template>
  <div class="carrinho">
    <div class="container">
      <div class="card">
        <img src="img/camisa/camisa-00001.jpg" alt="#">

        <div class="descricao">
          <h1>Camisa Marvel</h1>
          <p>Tamanho: P </p>
          
        </div>

        <div class="preco">
          <h1>R$ 10,50</h1>
          <h4>ou 2x de R$ 5,25</h4>
        </div>
        
      </div>
        <button> X </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carrinho',
  data: () => ({
    items:[]
  }),
  methods: {

  }
}
</script>

<style lang="less" scoped>

  .container {
    padding: 20px 10px;

    .card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #1b2a5b;

      img {
        width: 20%;
      }

      .descricao {
        text-align: center;

        h1 {
          font-size: 1.3rem;
        }

        p {
          margin: 0;
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

  }

</style>