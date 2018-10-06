import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Main from '@/components/Main'
import AboutUs from '@/components/AboutUs'
import Project from '@/components/Project'
import Contacts from '@/components/Contacts'
import IOS from '@/components/IOS'
Vue.use(Router)

let routes = [
  {path:"/",component:Main},
  {path:"/about",component:AboutUs},
  {path:"/project",component:Project},
  {path:"/contacts",component:Contacts},
  {path:"/ios",component:IOS}
]

let router = new Router({routes})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
