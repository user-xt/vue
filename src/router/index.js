import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/yemian/home.vue'
import Member from './../components/yemian/member.vue'
import Shopcar from './../components/yemian/shopcar.vue'
import Search from './../components/yemian/search.vue'


Vue.use(Router)

export default new Router({
  routes: [

    //重定向
    {
      path: '/',
      redirect:"/home"
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:"/member",
      name:"Member",
      component:Member
    },
    {
      path:"/shopcar",
      name:"Shopcar",
      component:Shopcar
    },
    {
      path:"/search",
      name:"Search",
      component:Search
    }


  ],

  linkActiveClass:"mui-active" //覆盖默认的路由高亮类，默认的类叫做router-link-active
})
 