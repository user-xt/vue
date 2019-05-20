<template>
  <div>
      <Header></Header>
      <Banner></Banner>
      <ListIcon></ListIcon>
      
      <Tabbar></Tabbar>
  </div>
</template>

<script>
    import Header from './../hader.vue'
    import Tabbar from './../tabbar.vue'
    import Banner from './../banner.vue'
    import ListIcon from './../listIcon.vue'
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
      Header,
      Tabbar,
      Banner,
      ListIcon

  }
}
</script>

<style scoped>

</style>
