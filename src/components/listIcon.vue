<template>
    <div>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <!-- <span class="mui-icon mui-icon-home"></span> -->
                    <img src="./../../static/img/1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="./../../static/img/2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="./../../static/img/3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="./../../static/img/4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="./../../static/img/5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="./../../static/img/6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a></li>
        
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {

        },
        components: {

        }
    }
</script>

<style lang="less" scoped>

.mui-grid-view.mui-grid-9{
    border: none;
    background-color: #fff;
}    
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    background-color:#fff; 
    border: none;
   
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size: 13px;
    color: #333;
}


</style>