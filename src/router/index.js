import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/yemian/home.vue'
import Member from './../components/yemian/member.vue'
import Shopcar from './../components/yemian/shopcar.vue'
import Search from './../components/yemian/search.vue'
import newList from './../components/homeList/news.vue'
import newsInfo from "./../components/homeList/newsInfo.vue"


Vue.use(Router)

export default new Router({
  routes: [

    //重定向
    {
      path: '/',
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: "/member",
      name: "Member",
      component: Member
    },
    {
      path: "/shopcar",
      name: "Shopcar",
      component: Shopcar
    },
    {
      path: "/search",
      name: "Search",
      component: Search
    },
    {
      path: "/home/newslist",
      component: newList
    },
    {
      path: "/home/newsInfo/:id",
      component: newsInfo
    }


  ],

  linkActiveClass: "mui-active" //覆盖默认的路由高亮类，默认的类叫做router-link-active
})
