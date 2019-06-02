<template>
  <div>
    
    <Banner></Banner>
    <ListIcon></ListIcon>
  </div>
</template>

<script>
  import Banner from './../banner.vue'
  import ListIcon from './../listIcon.vue'
  export default {
    data() {
      return {

      }
    },
    methods: {
      // this不是指代vue实例 需要保存this指向
      getDada() {
        this.$axios.get("videoCategory", {
          params: {
            "name": "zhangsan"
          }
        }).then(function (params) {
          console.log(params);
        })
      }

    },
    components: {
      Banner,
      ListIcon

    }
  }
</script>

<style lang="less" scoped>

</style>