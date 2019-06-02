<template>
  <div>
    <!-- <Hader></Hader> -->

    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item,index) in newslist" :key="description">
        <router-link :to="'/home/newsinfo/' +item.data.id">
          <img class="mui-media-object mui-pull-left" :src="item.data.icon">
          <div class="mui-media-body">
            <h3>{{item.data.description}}</h3>
            <p class='mui-ellipsis'>
              <span>发表时间：{{item.data.title}}</span>
              <span>点击:{{item.data.id}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script>
  // import Hader from './../hader.vue'
  import { Toast } from 'mint-ui'
  export default {
    data() {
      return {

      }
    },
    created() {
      this.getNewsList();
    },
    props: ['newslist', 'data', 'description'],
    methods: {
      getNewsList() { //获取新闻列表
        // this.$axios.get("videoCategory", {
        //   // params: {
        //   //   "name": "zhangsan"
        //   // }
        // }).then(function (params) {
        //   console.log(params);
        // })

        this.$http.get("videoCategory").then(result => {
          if (result.status === 200) {
            this.newslist = result.body.result.itemList;
            // console.log(this.newlist[1].data.icon)
          } else {
            Toast("数据请求失败！")
          }


        })


      }



    },
    components: {
      // Hader

    }
  }
</script>

<style lang="less" scoped>
  .mui-table-view {
    li {
      h3 {
        font-size: 16px;

      }

      .mui-ellipsis {
        font-size: 12px;
        color: #333;
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>