import Vue from 'vue'
import Router from 'vue-router'
import Top from './views/Top.vue'
import ScDetail from './components/ScDetail.vue'

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
          component: ScDetail
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
