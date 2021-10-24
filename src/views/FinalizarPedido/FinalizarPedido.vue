<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="nomeCompleto" :rules="nameRules" label="Nome completo" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="endereco" label="Endereço" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="celular" :rules="celular"  :counter="11" label="Celular" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-select v-model="eZap" :items="zap" :error-messages="selectErrors" label="É WhatsApp ?" required @blur="$v.select.$touch()"></v-select>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required ></v-text-field>
        </v-col>
      </v-row>

      <v-container class="d-flex justify-center">
        <v-btn  elevation="1" color="#ED0022" dark >
          Enviar
        </v-btn>
      </v-container>

    </v-container>
  </v-form>
</template>
<script>
export default {
  name: 'finalizarPedido',
  data: () => ({
      valid: false,
      nomeCompleto: '',
      lastname: '',
      nameRules: [
        v => !!v || 'É necessário inserir o seu nome completo'
      ],
      email: '',
      emailRules: [
        v => !!v || 'É necessário inserir um e-mail de contato',
        v => /.+@.+/.test(v) || 'É necessário inserir um e-mail válido',
      ],
      zap:[ 'Sim', 'Não' ],
      eZap: '',
      endereco: ''
    }),
  methods: {},
  
}
</script>

<style>

</style>