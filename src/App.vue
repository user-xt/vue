<template>
  <div class="app-container">

    <!-- 顶部Header区域 -->
    <Header></Header>

    <!-- 中间的路由 router-view区域 -->

    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部 Tabbar区域 -->


    <Tabbar></Tabbar>





  </div>
</template>

<script>
  import Header from './components/hader.vue'
  import Tabbar from './components/tabbar.vue'
  export default {
    name: 'App',
    components: {
      Header,
      Tabbar
    }
  }
</script>

<style lang="less" scoped>
  .app-container {
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden;
    /* position: relative; */


  }

  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }


  .v-enter-active,
  .v-leave-active {
    transition: all 0.2s ease;
  }
</style>