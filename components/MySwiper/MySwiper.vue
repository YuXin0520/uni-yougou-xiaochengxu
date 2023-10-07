<template>
  <view>
    <swiper :autoplay="autoplay" :interval="interval" :indicator-dots="indicatorDots" :circular="circular">
      <swiper-item v-for="item in list" :key="item.goods_id" >
        <image :src="item.image_src" @click="goSwiperDoodsDetail(item.goods_id)"></image>
      </swiper-item>
    </swiper>
  </view>
</template> 

<script>
  export default {
    props: {
      //轮播数据
      list:{
        type:Array,
      },
      //是否自动切换
      autoplay:{
        type:Boolean,
        default:true
      },
      //切换间隔时间
      interval:{
        type:Number,
        default:3000
      },
      //是否展示
      indicatorDots:{
        type:Boolean,
        default:true
      },
      circular:{
        type:Boolean,
        default:true
      }
    },
    name: "MySwiper",
    data() {
      return {
      };
    },
    methods:{
      goSwiperDoodsDetail(goods_id){
         uni.navigateTo({
           url:'/subpkg/goods_detail/goods_detail?goods_id=' + goods_id
         })
      }
    }
  }
</script>

<style lang="scss">
swiper{
  height: 330upx;
  width: 100%;
  swiper-item,image{
    height: 330upx;
    width: 100%;
  }
}
</style>