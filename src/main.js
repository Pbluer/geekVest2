import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Money from 'vuejs-money'
import './assets/js/GlobalFunction.js'

import './registerServiceWorker'
import 'animate.css'
import './assets/css/reset.css'

Vue.use( Money )
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
