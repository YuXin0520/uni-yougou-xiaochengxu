<template>
  <view>
    <!--小程序收获地址组件-->
    <!--#ifdef MP-WEIXIN-->
    <MyAddressWX></MyAddressWX>
    <!--#endif-->
    <!--H5收获地址组件-->
    <!--H5-->
    <!--#ifdef H5-->
    <MyAddressH5></MyAddressH5>
    <!--#endif-->
    <!--虚线-->
    <u-line color="red" border-style="dashed" />
    <!--购物车标题头-->
    <MyCartTitle></MyCartTitle>
    <!--商品组件-->
    <block v-for="(item,index) in cart" :key="item.goods_id">
      <CartItems :cartItemInfo="item" :moveId="moveId" @changeGoosState="changeGoosState"
        @changeGoodsCount="changeGoodsCount" @handleTouchMove="handleTouchMove" @removeItem="removeItem">
      </CartItems>
    </block>

    <!--小程序底部导航组件-->
    <!--#ifdef MP-WEIXIN-->
    <CartTabbar v-if="cart.length !== 0"></CartTabbar>
    <!--#endif-->
    <!--H5底部导航-->
    <!--#ifdef H5-->
    <view class="H5-cart-tabbar">
      <CartTabbar v-if="cart.length !== 0" class="H5-cart-tabbar"></CartTabbar>
    </view>
    <!--#endif-->
    <!--为空-->
<<<<<<< HEAD
    <view class="empty" >
=======
    <view class="empty">
>>>>>>> cart
      <u-empty mode="car" v-if="cart.length === 0"></u-empty>
    </view>
  </view>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from "vuex"
  import tabbarBadge from "@/mixins/tabbar-badge.js"
  export default {
    mixins: [tabbarBadge],
    data() {
      return {
        newCart: [],
        moveId: 0
      };
    },
    methods: {
      ...mapMutations('m_cart', ['changeCartGoodsState', 'changeCartGoodsCount', 'removeCartGoods']),
      //改变单个商品状态
      changeGoosState(goods) {
        this.changeCartGoodsState(goods)
      },
      //改变 单个商品数量
      changeGoodsCount(goods) {
        this.changeCartGoodsCount(goods)
        this.setBadge()
      },
      //确定当前打开的ID
      handleTouchMove(id) {
        this.moveId = id
      },
      //删除商品
      removeItem(goods) {
        this.removeCartGoods(goods)
        this.setBadge()
      }
    },
    computed: {
      ...mapState('m_cart', ['cart']),
    },
  }
</script>

<style lang="scss" scoped>
  .H5-cart-tabbar::v-deep .cart-tabbar {
    width: 100%;
    height: 100rpx;
    position: fixed;
    left: 0;
    bottom: 100rpx;
    z-index: 999;
  }
<<<<<<< HEAD

  .empty {
    width: 100%;
=======
  .empty{
>>>>>>> cart
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>