import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import ListArticles from '@/components/ListArticles'
import PostArticle from '@/components/PostArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'Home',
          component: ListArticles
        },
        {
          path: 'post',
          name: 'Post',
          component: PostArticle
        }
      ]
    }
  ]
})
