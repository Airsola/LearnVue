import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import  TodoList from './todolist'
 
Vue.use(MintUI)
Vue.use(VueRouter)


const Home = { template:'<div>This is Home</div>' }
const Foo = { template: '<div>This is Foo</div>' }
const Bar = { template: '<div>This is Bar {{ $route.params.id }}</div>' }



const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/foo', name: 'foo', component: Foo },
    { path: '/bar/:id', name: 'bar', component: Bar }
  ]
})

//测试Miti UI 使用
new Vue({
  el: '#app',
  //这里render的只是一个组件而已 传啥就渲染啥
  render: h => h(App)
})

//测试Miti UI 使用
new Vue({
  el: '#app2',
  //这里render的只是一个组件而已 传啥就渲染啥
  render: h => h(TodoList)
})



new Vue({
  router,
  template: `
    <div id="app">
      <h1>Named Routes</h1>
      <p>Current route name: {{ $route.name }}</p>
      <ul>
        <li><router-link :to="{ name: 'home' }">home</router-link></li>
        <li><router-link :to="{ name: 'foo' }">foo</router-link></li>
        <li><router-link :to="{ name: 'bar', params: { id: 123 }}">bar</router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app0')

// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
