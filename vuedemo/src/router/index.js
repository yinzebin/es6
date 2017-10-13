import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo1 from '@/components/Demo1'
import App from '@/components/App'
import VuexDemo from '@/components/VuexDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/demo1',
      name: 'Demo1',
      component: Demo1
    },
    {
      path: '/app',
      name: 'App',
      component: App
    },
    {
      path: '/vuex-demo',
      name: 'VuexDemo',
      component: VuexDemo
    }
  ]
})
