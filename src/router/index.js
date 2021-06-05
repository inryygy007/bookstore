import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home',
      component: resolve => require(['../views/tabbar/Home.vue'], resolve)
    },
    {
      path: '/Homepage',
      name: 'Homepage',
      component: resolve => require(['../views/tabbar/Home.vue'], resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
      
    },
     //书架
     {
      path: '/bookrack',
      name: 'bookrack',
      component: resolve => require(['../views/tabbar/Bookrack'], resolve)
    },
    //分类
    {
      path: '/classify',
      name: 'classify',
      component: resolve => require(['../views/tabbar/Classify.vue'], resolve)
    },
    // 排行
    {
      path: '/rank',
      name: 'rank',
      component: resolve => require(['../views/tabbar/Rank'], resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
  ],
  linkActiveClass: 'gaoliang'
})

