import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    //主页
    {
      path: '/',
      redirect: '/Home',
      component: resolve => require(['../views/tabbar/Home.vue'], resolve)
    },
    {
      path: '/Home',
      name: 'Home',
      component: resolve => require(['../views/tabbar/Home.vue'], resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
      
    },

    // 加载更多
    {
      path: '/list',
      name: 'list',
      component: resolve => require(['../components/read/List'], resolve)
    },
    // 书详情
    {
      path: '/book:id',
      name: 'book',
      component: resolve => require(['../components/Book/index.vue'], resolve),
      meta: {
        keepAlive: true // 缓存
      }
    },
    //阅读
    {
      path: '/read',
      name: 'read',
      component: resolve => require(['../components/read/Read'], resolve)
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
    {
      path: '/clylist/:major:gender',
      name: 'clylist',
      component: resolve => require(['../components/read/Clylist.vue'], resolve)
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

