import Vue from 'vue'

Vue.mixin({
  methods:{
    precoFormatado: preco => Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)
  }
})