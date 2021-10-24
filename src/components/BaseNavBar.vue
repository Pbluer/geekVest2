<template>
  <div>
    <div class="navBar">
      <router-link to="/">
        <img  src="@/assets/logo.png" alt="GeekVest" id="logo" />
      </router-link>
      <div class="nav">    
                  
                
      <router-link to="/carrinho" class="carrinho"> <v-icon>mdi-cart-variant</v-icon> </router-link>
          

        <ul class="menuDesktop">
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/">Camisa</router-link></li>
          <li><router-link to="/">Caneca</router-link></li>          
          <li><router-link to="/">Chaveiro</router-link></li>          
        </ul>

        <v-navigation-drawer class="menuMobile" v-model="drawer" absolute temporary dark>
          <v-list nav dense>
            <v-list-item-group v-model="group">            

              <v-list-item>            
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <router-link to="/">Inicio</router-link>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon> mdi-tshirt-crew</v-icon>
                </v-list-item-icon>
                 <router-link to="camisa">Camisa</router-link>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </div>

      <button @click.prevent="drawer = !drawer" > &#x2630; </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'navBar',
  data: () => ({
    drawer: false,
    group: null,
    mobile: false,
  }),
  methods: {},
};
</script>

<style lang="less" scoped>
.navBar {
  display: flex;
  align-items: center;
  background-color: #ed0022;
  height: 100px;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 8px solid #1b2a5b;

  #logo {
    width: 80px;
  }

  .carrinho {
    color: white;
    text-decoration: none;

    i {
      color: white;
    }
  }

  button {
    display: none;
  }
}

.menuMobile {
  display: none;

 
  a {
    text-decoration: none;
    color: #fff;
  }

}

.menuDesktop {
  display: flex;
  list-style-type: none;

  li {
    margin: 20px;
    text-decoration: none;
    
    a {
      text-decoration: none;
      background-color: #fff;
      padding: 10px 15px;
      border-radius: 10px;
      color: #1b2a5b;
      
      &:hover {
        background-color: #1b2a5b;
        color: #fff;
      }

    }

  }
}

@media screen and (max-width: 720px) {

  .navBar {

    height: 80px;

    #logo {
      width: 50px;
    }
    
    button {
      display: block;
      color: #fff;
      font-size: 30px;
    }

    .menuMobile {
      display: block;
    }
    .menuDesktop {
      display: none;
    }
  }
}
</style>