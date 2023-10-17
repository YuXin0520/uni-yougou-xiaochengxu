<template>
  <view class="cart-tabbar">
    <label class="cart-radio">
      <radio color="#c00000" :checked="cartAllRadio" @click="changeRadio" />全选
    </label>
    <view class="class-tabbar-price">
      ￥{{Number(cartStatusPrice).toFixed(2)}}
    </view>
    <view class="class-tabbar-btn" :class="cartStatusCout ? '' : 'btn-disable'" @click="goSettlement">
      结算（{{cartStatusCout}})
    </view>
  </view>
</template>

<script>
  import {
    mapGetters,
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    name: "CartTabbar",
    data() {
      return {
        //定时器秒数
        second:3,
        //定时器id
        timer:null
      };
    },
    computed: {
      ...mapGetters('m_cart', ['cartStatusPrice', 'cartStatusCout', 'cartAllRadio']),
      ...mapState('m_user', ['address', 'token'])
    },
    methods: {
      //点击全选
      ...mapMutations('m_cart', ['changeAllstatus']),
      //单选按钮
      changeRadio() {
        const status = !this.cartAllRadio
        //改变单选按钮
        this.changeAllstatus(status)
      },
      //goSettlement跳转结算页面或者调起支付
      goSettlement() {
        //判断是否有选中的商品
        if (!this.cartStatusCout) return
        //判断是否选择地址''
        console.log(this.address)
        if (JSON.stringify(this.address) == '{}') return uni.$showToast('请选择地址')

      },
      //跳转登录
      delayNative(){
        uni.$showToast(`请登录，${this.second}秒后跳转登录页`)
        this.timer = setInterval(() => {
            this.second--
            uni.$showToast(`请登录，${this.second}秒后跳转登录页`)
        }, 1000);
      },
    }
  }
</script>

<style lang="scss">
  page {
    padding-bottom: 100rpx;
  }

  .cart-tabbar {
    width: 100%;
    height: 50px;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    z-index: 999;
    padding: 0 20rpx;

    .class-tabbar-price {
      font-size: 36rpx;
      color: #ff0000;
    }

    .class-tabbar-btn {
      padding: 0 25rpx;
      text-align: center;
      background-color: #c00000;
      height: 100rpx;
      line-height: 100rpx;
      font-size: 36rpx;
      color: #fff;

      &.btn-disable {
        background-color: #ccc;
      }
    }

    .cart-item-options {
      width: 50rpx;
      background-color: red;
      text-align: center;
    }
  }
</style>