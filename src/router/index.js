import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import Card from '@/components/Card'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Article',
      component: Article
    }, {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    }
  ]
})
