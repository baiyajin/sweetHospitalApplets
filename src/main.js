import Vue from 'vue'
import App from './App'
import store from '@/store'
import toast from '@/component/toast'
Vue.config.productionTip = false
Vue.component('my-custom-toast', toast)

App.mpType = 'app'

new Vue({
  store,
  render: h => h(App)
}).$mount("#app")
