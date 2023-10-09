<template>
  <view>
    <swiper :autoplay="autoplay" :interval="interval" :indicator-dots="indicatorDots" :circular="circular" :style="{height:swiperHeight + 'rpx'}">
      <swiper-item v-for="(item,index) in list" :key="index" >
        <image :src="item.pics_big || defaultPic" @click="clickSwiper(item,index)"></image>
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
      },
      swiperHeight:{
        type:Number,
        default:750
      }
    },
    name: "MySwiper",
    data() {
      return {
        defaultPic: '../../static/img/defautlpicture.png'
      };
    },
    methods:{
      //点击图片事件
      clickSwiper(item,index){
        const obj = {item,index}
         this.$emit('clickSwiper',obj)
      }
    }
  }
</script>

<style lang="scss">
swiper{
  width: 100%;
  swiper-item,image{
    height: 100%;
    width: 100%;
  }
}
</style>