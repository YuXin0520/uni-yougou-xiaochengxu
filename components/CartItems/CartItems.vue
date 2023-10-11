<template>
  <view class="cart-items">
    <view class="cart-items-radio">
      <radio color="#c00000" :checked="cartItemInfo.goods_state" @click="changeGoosState"/>
    </view>
    <view class="cart-items-image">
      <image :src="cartItemInfo.goods_small_logo"></image>
    </view>
    <view class="cart-items-info">
      <view class="cart-items-info-name">
        {{cartItemInfo.goods_name}}
      </view>
      <view class="cart-items-info-bottom">
        <view class="cart-items-info-price">
          ￥{{Number(cartItemInfo.goods_price).toFixed(2)}}
        </view>
        <view class="cart-items-info-acount">
          <uni-number-box :min="1" :value="cartItemInfo.goods_count" @change="changeGoodsCount" v-if="uniNumberBoxStatus" />
          <text @click="changeNumStatus" v-else>x{{cartItemInfo.goods_count}}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import CartItemsVue from './CartItems.vue';
  export default {
    props: {
      cartItemInfo: {
        type: Object,
      }
    },
    name: "CartItems",
    data() {
      return {
        uniNumberBoxStatus: false
      };
    },
    methods: {
      //点击显示数量框
      changeNumStatus(){
        this.uniNumberBoxStatus = true
      },
      //输入框改变数量了
      changeGoodsCount(value) {
        const goods = this.cartItemInfo
        goods.goods_count = value
        this.$emit('changeGoodsCount',goods)
      },
      //改变单选框
      changeGoosState(){
        this.$emit('changeGoosState',this.cartItemInfo)
      }
    },
    created() {
      console.log(this.cartItemInfo)
    }
  }
</script>

<style lang="scss">
  page {
    background-color: #f2f2f2;
  }

  .cart-items {
    margin: 10rpx;
    border-radius: 15rpx;
    display: flex;
    justify-content: space-between;
    background-color: #fff;

    .cart-items-radio {
      margin: 0 5rpx;
      display:flex;
      align-items: center;
    }

    .cart-items-image {
      image {
         border-radius: 15rpx;
        width: 200rpx;
        height: 200rpx;
      }
    }

    .cart-items-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding:15rpx;
      .cart-items-info-name {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
      }

      .cart-items-info-bottom {
        display: flex;
        justify-content: space-between;
        .cart-items-info-price {
          color: #ff0000;
        }

        .cart-items-info-acount {
          text {
            display: block;
            width: 52rpx;
            height: 52rpx;
            line-height: 52rpx;
            border: 1px solid #ccc;
            text-align: center;
            border-radius: 15rpx;
            color: #ccc;;
          }
        }
      }
    }
  }
</style>