<template>
  <div class="newsInfo">
    <!-- $route.params.id  拿到id -->
    <!-- <h3>新闻详情 ---{{ $route.params.id }}</h3> -->
    <h3 class="listtitle">{{ newsInfo.title }}</h3>
    <p class="subtitle">
      <span class="time">发表时间：{{ newsInfo.ptime | dataFormat("YYYY-MM-DD") }}</span>
      <span>点击：{{ newsInfo.tcount }}次</span>
    </p>
    <hr>
    <div class="content" v-html="newsInfo.digest">
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  export default {
    data() {
      return {
        id: this.$route.params.id,  //将URL地址中传递过来的Id值，挂载到data上方便以后的调用
        newsInfo: {}
      }
    },
    created() {
      this.getNewsInfo();
    },
    methods: {
      getNewsInfo() {
        // this.$axios.get('https://www.apiopen.top/journalismApi')
        //   .then(function (response) {
        //     if (response.data.code === 200) {
        //       console.log(response)
        //       this.newsInfo = response.data.data.auto[0];
        //       console.log(1);
        //       console.log(this.newsInfo);
        //     } else {
        //       Toast("获取页面失败！")
        //     }
        //   })
        //   .catch(function (error) {

        //   });

        this.$http.get("https://www.apiopen.top/journalismApi").then(res => {

          if (res.data.code === 200) {
            this.newsInfo = res.data.data.auto[0];
            console.log(this.newsInfo);
          } else {
            Toast("页面加载失败！")
          }
        })

      }


    },
    components: {

    }
  }
</script>

<style lang="less" scoped>
  .newsInfo {
    padding: 0px 4px;

    .listtitle {
      font-size: 18px;
      text-align: center;
      margin: 15px 0;
      color: red;
    }

    .subtitle {
      margin-bottom: 4px;
      font-size: 13px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }

  hr {
    margin-top: 0;
    color: #fff;
  }
</style>