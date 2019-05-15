<template>
  <div class="app-container">

    <!-- 顶部Header区域 -->
   <Header></Header>

    <!-- 中间的路由 router-view区域 -->



    <!-- 底部 Tabbar区域 -->

    <Tabbar></Tabbar>
   




  </div>
</template>

<script>
  import Header from './components/hader.vue'
  import Tabbar from './components/tabbar.vue'
  export default {
    name: 'App',
    components:{
      Header,
      Tabbar
    }
  }
</script>

<style lang="less" scoped>
  .app-container {
    padding-top: 40px;

  }
</style>