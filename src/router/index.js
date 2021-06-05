import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //路由懒加载
      component: ()=> import('../views/Home.vue')
    },
  ]
})

