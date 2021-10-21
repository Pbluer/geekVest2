<template>
  <div class="buy">
    <div class="container">
      <img :src="item.image" :alt=" item.name ">
      <div class="primaryInformation">
        <h1> {{ item.name }} </h1>
        <h3>R$ {{item.price }} </h3>
      </div>
      
      <div class="containerSize">
        <h2>Tamanho:</h2>        
        <div v-for="size in item.size" :key="size">
          <label :for="size"> {{size}} </label>
          <input type="radio" :value="size" name="color" v-model="sizeSelected">         
        </div>          
      </div>
     
      <div class="secondInformation">
        <button id="cart">
          <v-icon>mdi-cart-plus</v-icon>
        </button>
        <button id="description" @click=" descricaoMobile = !descricaoMobile " > Descrição </button>
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

export default {
  name: 'buy' ,
  beforeMount(){
    this.loadItem()
  },
  data: () => ({
    descricaoMobile: false,
    item: {
      image:'',
      name: '',
      price: '',      
      description: '',
      size:''      
    },
    sizeSelected: ''
  }),
  methods: {
    loadItem(){
      let item = allShirt.getters.getItem( this.$route.params.id )
      
      var { image, name, price, fullDescription, size } = item[0]
      console.log(size)
      this.item.image = '../' + image
      this.item.name =  name
      this.item.price = price
      this.item.description = fullDescription
      this.item.size = size
    }
  }
}
</script>

<style lang="less" scoped>

  .container {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 20px;

    img {
      width: 80%;
      border-radius: 15px;
      padding: 10px;
      background-color: rgb(228, 228, 228);
      box-shadow: 0 0 3px rgb(83, 83, 83);
    }

    .primaryInformation {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      width: 300px;
      align-items: center;

      h1 {
        font-size: 1.3rem;
      }

      h3 {
        color: green;
        font-size: 1.5rem;
      }

    }

    .containerSize {
      width: 300px;
      display: flex;
      padding-right: 5vw ;   

      h2 {
        font-size: 1.2rem;
        margin-right: 10px;
      }      
      div { margin: 5px; }
    }

    .secondInformation {
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 300px;
      margin-top: 10px;

      #description {
        width: 150px;
        height: 30px;
        border-radius: 15px;
        background: #1b2a5b;
        color: #fff;
      }
      
      #cart{
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