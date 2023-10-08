<template>
  <view>
    <!-- 搜索导航组件 -->
    <MySearch :enable="enable"></MySearch>
    <!-- 轮播图组件 -->
    <!-- <MySwiper :list='swiperList'></MySwiper> -->
    <u-swiper :list="swiperList" name='image_src' height='330' @click="goSwiperDoodsDetail"></u-swiper>
    <!-- 分类导航组件 -->
    <HomeNav :list="navList"></HomeNav>
    <!-- 楼层组件 -->
    <HomeFloor :list="FloorList"></HomeFloor> 
  </view>
</template>

<script>
  import {useSwiperServe,useCateServe,useFloorServe} from '@/api/home-ajax.js'
  export default {
    data() {
      return {
        //轮播图数据
         swiperList:[],
         //分类导航数据
         navList:[],
         //楼层数据
         FloorList:[],
         //搜索组件的监听
         enable:true
      };
    },
    onLoad() {
      this.getSwiperList()
      this.getNavList()
      this.getFloorList()
    },
    methods:{
      //请求轮播图数据
       async getSwiperList(){
          const res = await useSwiperServe()
          this.swiperList = res.message
      },
      //轮播图跳转详情页面
      goSwiperDoodsDetail(e){
        const swiperGoodsId = this.swiperList[e].goods_id
        uni.navigateTo({
          url:'/subpkg/goods_detail/goods_detail?goods_id=' + swiperGoodsId
        })
      },
      //请求分类导航的数据
      async getNavList(){
          const res = await useCateServe()
          this.navList = res.message
      },
      //请求楼层的数据
      async getFloorList(){
          const res = await useFloorServe()
          this.FloorList = res.message
      },
    },
    //在对应的show和hide页面生命周期中打开或关闭监听
    	onShow() {
    		this.enable = true
    	},
    	onHide() {
    		this.enable = false
    	}
  }
</script>

<style lang="scss">
.u-swiper-wrap{
  height: 330rpx;
  width: 100%;
  .u-swiper-item{
    height: 330rpx;
    img{
      height: 330rpx;
    }
  }
}
</style>
