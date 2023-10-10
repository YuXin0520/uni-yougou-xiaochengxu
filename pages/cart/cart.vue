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
    <block v-for="(item,index) in cart" :key="index">
      <u-swipe-action :options="options" @open="open" :index="index" :show="false" class="u-class">
        <CartItems :cartItemInfo="item" @changeGoosState="changeGoosState" @changeGoodsCount="changeGoodsCount">
        </CartItems>
      </u-swipe-action>

    </block>
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
        newCart:[],
        //滑动组件的参数
        options: [{
            text: '收藏',
            style: {
              backgroundColor: '#007aff'
            }
          },
          {
            text: '删除',
            style: {
              backgroundColor: '#dd524d'
            }
          }
        ]
      };
    },
    methods: {
      ...mapMutations('m_cart', ['changeCartGoodsState', 'changeCartGoodsCount']),
      //改变单个商品状态
      changeGoosState(goods) {
        this.changeCartGoodsState(goods)
      },
      //改变 单个商品数量
      changeGoodsCount(goods) {
        this.changeCartGoodsCount(goods)
      },
      //
      open(index) {
        // 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
        // 原本为'false'，再次设置为'false'会无效
        this.newCart[index].show = true;
        this.newCart.map((val, idx) => {
          if (index != idx) this.newCart[idx].show = false;
        })
      }
    },
    onLoad(){
      this.newCart = this.cart.map(x=>{
        x.show = false
      })
      console.log("newc",this.newCart)
    },
    computed: {
      ...mapState('m_cart', ['cart']),
    }
  }
</script>

<style lang="scss">
.u-class{
  margin: 10rpx;
  border-radius: 15rpx !important;
  
}
</style>