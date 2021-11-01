<template>
  <div class="home animate__animated animate__fadeIn">
    <div class="container">
      <div class="destaque">
        <h1>DESTAQUE</h1>
        <div class="grid">
          <router-link :to="{ name: item.link, params: { id: item.id } }" class="itemCard" v-for="item in featuredItem" :key="item.nome">            
            <h1> {{ item.nome }} </h1>
            <img :src="item.image" :alt="item.name">
            <h3> {{ precoFormatado(item.preco) }} </h3>
            <p>{{ item.pequenaDescricao }}</p>                 
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import homePage from '@/store/HomePage.js'

  export default {
    name: 'Home',
    components: {
    },
    data: () => ({
    }),
    methods:{
    },
    computed: {
      featuredItem: () => homePage.state.items
    }

  }
</script>

<style lang="less" scoped>

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  .destaque {
    margin: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;

    h1 {
      color: #1b2a5b;
      font-size: 1.5rem;
      border-bottom: 2px solid #1b2a5b;
    }

    .grid {
      margin-top: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px 15px;     

      .itemCard{
        width: 150px;
        height: 280px;
        border: 1px solid rgba(109, 109, 109, 0.363);
        border-radius: 15px;
        padding: 0;
        text-align: center;
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.178);
        text-decoration: none;
        color: black;

        h1 {
          background-color: #1b2a5b;
          font-size: 15px;
          color: #fff;
          border-radius: 15px 15px 0 0;
          margin-bottom: 10px;
        }

        img {
          width: 130px;
        }

        h3 {
          font-size: 1rem;
          margin: 10px 0;
          border-top: 2px solid #1b2a5b;
          border-bottom: 2px solid #1b2a5b;
          color: rgb(59, 59, 59);
          color: green;
        }


      }
    }

  }
}


@media screen and (min-width: 1024px) {
  .destaque {
    margin-bottom: 20px;
    .grid {
      display: flex !important;
      gap: 20px 40px !important;
    }
  }
}
  
</style>