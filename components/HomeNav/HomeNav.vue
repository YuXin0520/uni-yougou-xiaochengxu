<template>
  <view class="nav">
    <view class="nav-item" v-for="item in list" :key="item.image_src" @click="goNavGoodsDetail(item)">
      <image :src="item.image_src"></image>
    </view>
  </view>
</template>

<script>
  export default {
    props:{
      list:{
        type:Array,
      }
    },
    name:"MyNav",
    data() {
      return {
        
      };
    },
    methods:{
      //跳转
      goNavGoodsDetail(item){
        if(item.open_type == 'switchTab' && item.name == '分类'){
          uni.switchTab({
            url:'/pages/cate/cate'
          })
        }
      }
    }
  }
</script>

<style lang="scss">
.nav{
    display: flex;
    justify-content: space-around;
    margin: 15upx 0;
    image{
      width: 128upx;
      height: 140upx;
    }
}
</style>