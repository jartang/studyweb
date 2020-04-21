import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import News from '../pages/News'
import Mine from '../pages/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
