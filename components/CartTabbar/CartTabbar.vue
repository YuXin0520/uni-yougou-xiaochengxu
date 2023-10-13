<template>
  <view class="cart-tabbar">
    <label class="cart-radio"><radio color="#c00000" :checked="cartAllRadio" @click="changeRadio"/>全选</label>
    <view class="class-tabbar-price">
      ￥{{Number(cartStatusPrice).toFixed(2)}}
    </view>
    <view class="class-tabbar-btn" :class="cartStatusCout ? '' : 'btn-disable'" @click="goSettlement">
      结算（{{cartStatusCout}})
    </view>
  </view>
</template>

<script>
  import { mapMutations } from 'vuex';
import {mapGetters} from 'vuex'
  export default {
    name:"CartTabbar",
    data() {
      return {
        
      };
    },
    computed:{
      ...mapGetters('m_cart',['cartStatusPrice','cartStatusCout','cartAllRadio'])
    },
    methods:{
      //点击全选
      ...mapMutations('m_cart',['changeAllstatus']),
      changeRadio(){
        const status = !this.cartAllRadio
        this.changeAllstatus(status)
      },
      //goSettlement跳转结算页面或者调起支付
      goSettlement(){
        if(!this.cartStatusCout) return
        console.log('结算',this.cartStatusPrice)
      }
    }
  }
</script>

<style lang="scss">
  page{
    padding-bottom: 100rpx;
  }
.cart-tabbar{
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  bottom:0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  z-index: 999;
  padding: 0 20rpx;
  .class-tabbar-price{
    font-size: 36rpx;
    color: #ff0000;
  }
  .class-tabbar-btn{
    padding:0 25rpx;
    text-align: center;
    background-color: #c00000;
    height: 100rpx;
    line-height:100rpx;
    font-size: 36rpx;
    color:#fff;
    &.btn-disable{
      background-color: #ccc;
    }
  }
  .cart-item-options{
    width: 50rpx;
    background-color: red;
    text-align: center;
  }
}
</style>