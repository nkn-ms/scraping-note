import Vue from 'vue'
import Router from 'vue-router'
import Top from './views/Top.vue'
import ScDetailCard from './components/ScDetailCard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Top,
      children: [
        {
          path: 'detail/:id',
          component: ScDetailCard
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
