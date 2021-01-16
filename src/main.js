import App from './App.vue'
import Vue from 'vue'
import router from './router'
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify/lib'
import store from './store/index'

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')