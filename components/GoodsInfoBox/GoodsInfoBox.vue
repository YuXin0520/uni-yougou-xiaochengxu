<template>
  <view class="goods-info-box">
    <view class="goods-info-prcie">
      ￥{{Number(goodsInfo.goods_price).toFixed(2)}}
    </view>
    <view class="goods-info-content">
      <view class="goods-info-content-name">
        {{goodsInfo.goods_name}}
      </view>
      <view class="goods-info-content-collection" @click="changeIcons">
        <uni-icons type="star-filled" size="30" :color="collectionColor" v-if="isCollection"></uni-icons>
        <uni-icons type="star" size="30" :color="noCollectionColor" v-else></uni-icons>
        <text>收藏</text>
      </view>
    </view>
    <view class="goods-info-logistics">
      <text>快递：免运费</text>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      goodsInfo: {
        type: Object,
      },
      noCollectionColor:{
        type:String,
        default:"#ccc"
      },
      collectionColor:{
        type:String,
        default:'#f3a73f'
      },
      isCollection:{
        type:Boolean,
        default:false
      }
    },
    name: "GoodsInfoBox",
    data() {
      return {
      };
    },
    methods:{
      changeIcons(){
        this.$emit("clickCollection")
      }
    }
  }
</script>

<style lang="scss">
  .goods-info-box {
    padding-left: 10rpx;
    margin: 15rpx 0;
    .goods-info-prcie {
      color: #ff0000;
      font-size: 36rpx;
      margin: 15rpx 0;
    }
    .goods-info-content {
      display: flex;
      justify-content: space-between;
      .goods-info-content-name {
        border-right: 1px solid #ccc;
        padding-right: 10rpx;
      }
      .goods-info-content-collection {
        width: 180rpx;
        font-size: 24rpx;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    .goods-info-logistics {
      color: #ccc;
    }
  }
</style>