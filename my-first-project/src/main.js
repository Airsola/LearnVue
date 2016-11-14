import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
 
Vue.use(MintUI)

// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

new Vue({
  el: '#app',
  render: h => h(App)
})


let abb = 10 