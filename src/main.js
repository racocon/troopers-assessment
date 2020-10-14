import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'
import store from './store'
import VueCompositionApi from '@vue/composition-api'
import VueCurrencyInput from 'vue-currency-input'

Vue.config.productionTip = false

Vue.use(VueCompositionApi)
Vue.use(VueCurrencyInput)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
