import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import About from './components/about.vue'
import Work from './components/work.vue'
import Scoo from './components/scoo.vue'
import Gride from './components/gride.vue'
import Essenza from './components/essenza.vue'
import Torcedor from './components/torcedor.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
      path: '/work',
      name: 'work',
      component: Work,
      children: [
          {
            path: '',
          },
          {
            path: '/work/scoo',
            name: 'scoo',
            component: Scoo,
          },
          {
            path: '/work/gride',
            name: 'gride',
            component: Gride,
          },
          {
            path: '/work/essenza',
            name: 'essenza',
            component: Essenza,
          },
          {
            path: '/work/torcedor',
            name: 'torcedor',
            component: Torcedor,
          },
      ]
    },
    
    { path: '*', redirect: '/' }
  ]
})