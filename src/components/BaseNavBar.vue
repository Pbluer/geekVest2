<template>
  <div>
    <div class="navBar">
      <router-link to="/">
        <img  src="@/assets/logo.png" alt="GeekVest" id="logo" />
      </router-link>
      
      <div class="nav">                  
                
        <router-link to="/carrinho" class="carrinhoMobile"> <v-icon>mdi-cart-variant</v-icon> </router-link>

        <ul class="menuDesktop">
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/camisa">Camisa</router-link></li>
          <li class="carrinhoDesktop">
            <router-link to="/carrinho"> <v-icon>mdi-cart-variant</v-icon> </router-link>
          </li>
        </ul>

        <v-navigation-drawer class="menuMobile" v-model="drawer" absolute temporary dark>
          <v-list nav dense>
            <v-list-item-group v-model="group">            

              <router-link to="/">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                  </v-list-item-icon>
                  Inicio
                </v-list-item>
              </router-link>

              <router-link to="camisa">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon> mdi-tshirt-crew</v-icon>
                  </v-list-item-icon>
                  Camisa
                </v-list-item>
              </router-link>
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

<style lang="less" scoped >
.navBar {
  display: flex;
  align-items: center;
  background-color: #ed0022;
  height: 80px;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 8px solid #1b2a5b;

  #logo {
    width: 50px;
  }

  .carrinhoMobile {
    color: white;
    text-decoration: none;

    i {
      color: white;
    }
  }

  button {
    display: block;
    color: #fff;
    font-size: 30px;
  }
}

.menuMobile {
  display: block;
 
  a {
    text-decoration: none;
    color: #fff;
  }

}

.menuDesktop {
  display: none;
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

@media screen and (min-width: 1024px) {

  .navBar {
    height: 100px;

    #logo {
      width: 13%;
    }
    
    .carrinhoMobile {
      display: none;
    }

    .carrinho{
      color: #1b2a5b;
    }
    
    button {
      display: none;
    }

    .menuMobile {
      display: none;
    }
    .menuDesktop {
      display: flex;

      .carrinhoDesktop {
        
        a {
          background-color: #1b2a5b;
        }

        i {
          color: #fff;
        }
      }

    }
  }

}
</style>