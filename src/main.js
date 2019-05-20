// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 导入APP组件
import App from './App'
import router from './router'

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import 'mint-ui/lib/style.css'
import "./lib/mui/css/mui.min.css"



import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)


// 导入vue-axios
// import VueAxios from 'axios'
// 安装VueAxios
// Vue.use(VueAxios)



import VueResource from 'vue-resource'

Vue.use(VueResource)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  beforeCreate() {
    this.$router.push("/home")
  },
}
)
