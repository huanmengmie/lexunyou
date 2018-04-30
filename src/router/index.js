import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/view/index'
import Scenery from '@/view/scenery'
import AboutUs from '@/view/aboutUs'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/scenery',
      name: 'scenery',
      component: Scenery
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUs
    },
    {
      path: '/2',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
