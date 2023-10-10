<template>
  <view class="cart-title">
    <uni-icons :type="iconsName" size="30" class="cart-icons"></uni-icons>
    <text>{{titleName}}</text>
  </view>
</template>

<script>
  export default {
    props:{
      iconsName:{
        type:String,
        default:'shop-filled'
      },
      titleName:{
        type:String,
        default:'购物车'
      }
    },
    name:"MyCartTitle",
    data() {
      return {
        
      };
    }
  }
</script>

<style lang="scss">
.cart-title{
  height: 60rpx;
  display: flex;
  align-items: center;
  padding:30rpx 10rpx;
  border-bottom: 0.1px solid #ccc;
  .cart-icons{
    margin-right: 15rpx;
  }
}
</style>