<template>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper">
        <!-- slides -->
        <swiper-slide class="swiper-list" v-for="item in lunbotuList" :key="item.data.icon">
            <img :src="item.data.icon" alt="">
        </swiper-slide>
        <!-- Optional controls -->

    </swiper>
</template>

<script>
    import { Toast } from 'mint-ui'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "carrousel",
        data() {
            return {
                swiperOption: {

                },
                lunbotuList: [],//保存轮播图的数组

            }
        },

        created() {
            this.getLunbotu();
        },
        methods: {
            getLunbotu() {//获取轮播图数据
                this.$http.get("https://api.apiopen.top/videoCategory").then(res => {
                    console.log(res.body);
                    // console.log(res.status)
                    if (res.status === 200) {
                        this.lunbotuList = res.body.result.itemList
                        console.log(this.lunbotuList[1].data.icon);
                    } else {
                        Toast("加载轮播图失败")
                    }

                })


            }

        },
        components: {
            swiper,
            swiperSlide

        },
        mounted() {
            console.log('this is current swiper instance object', this.swiper)
            // this.swiper.slideTo(3, 1000, false)
        },
    }
</script>

<style lang="less" scoped>
    /* @import 'swiper/dist/css/swiper.css' */
    .swiper {
        height: 200px;

    }

    /* .swiper-list { */
        /* &:nth-child(1) {
            background-color: red;
        }

        &:nth-child(2) {
            background-color: blue;
        }

        &:nth-child(3) {
            background-color: green;
        } */

        
    /* } */

    .swiper-list img {
            width: 100%;
            height: 100%;
            margin: 0 auto;
            display: block;
            font-size: 0;
        }
</style>