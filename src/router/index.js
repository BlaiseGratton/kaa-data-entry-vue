import Vue from 'vue'
import Router from 'vue-router'
import SearchView from '@/components/SearchView'
import DetailView from '@/components/DetailView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SearchView',
      component: SearchView
    },
    {
      path: '/detail/:collection/:inventoryNum',
      name: 'DetailView',
      component: DetailView
    }
  ]
})
