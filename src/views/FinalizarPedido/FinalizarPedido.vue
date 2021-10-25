<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="nomeCompleto" :rules="nameRules" autocomplete="false" label="Nome completo" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="endereco" label="Endereço completo" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="celular"  label="Celular" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-select v-model="eZap" :items="zap" label="É WhatsApp ?" required ></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="email" label="E-mail" required ></v-text-field>
        </v-col>
      </v-row>
      <v-container class="d-flex justify-center">
        <v-btn  elevation="1" color="#ED0022" dark @click="finalizar()" >
          Enviar
        </v-btn>
      </v-container>
    </v-container>

    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5 center">
          Pedido Efetuado
        </v-card-title>
        <v-card-text> 
          Em instante alguém da GeekVest estara entrando em contato.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="buttonClose" text @click="closeModal()">
            Fechar
          </v-btn>
          
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-form>
</template>
<script>

import carrinho from '@/store/Carrinho.js' 
import email from "emailjs-com"

export default {
  name: 'finalizarPedido',
  data: () => ({
      valid: false,
      dialog: false,
      nomeCompleto: '',
      endereco: '',
      celular:'',
      email: '',
      eZap: '',
      nameRules: [
        v => !!v || 'É necessário inserir o seu nome completo'
      ],
      emailRulses: [
        v => !!v || 'É necessário inserir um e-mail de contato',
        v => /.+@.+/.test(v) || 'É necessário inserir um e-mail válido',
      ],
      zap:[ 'Sim', 'Não' ],
      modal:{
        active: false,
        type: null,
        mensagem: null,
        icon: null
    },
      
    }),
  methods: {
    finalizar(){
      var data = new Date();
      var dia = String(data.getDate()).padStart(2, '0');
      var mes = String(data.getMonth() + 1).padStart(2, '0');
      var ano = data.getFullYear();
      let dataAtual = dia + '-' + mes + '-' + ano;     

      let formPedido = '';
      const pedidos = carrinho.state.carrinho
      pedidos.forEach( e => {
        formPedido = formPedido.concat( ` ( Nome: ${e.nome} - Preço: ${e.preco} - Quantidade: ${e.quantidade} ) `)
      });

      try{
        email.send("service_2ptzdpi","template_q3acrqb",{
          dataPedido: dataAtual ,
          nomeCliente: this.nomeCompleto,
          endereco: this.endereco,
          celular: this.celular,
          zapConfirmation: this.eZap,
          email: this.email,
          pedido: formPedido,
          }, "user_imtXOQpdmAmqvhmP5WoKs").then( res => {
            
            if( res.status === 200){
              this.dialog = true
              carrinho.commit('limparCarrinho')
            }

          } );
      } catch(e){
        console.log(e)
      }
    },
    closeModal(){
      this.dialog = false

      setTimeout(() => {  this.$router.push('/') }, 1000 )
     
    }
  },
  
}
</script>

<style>

</style>