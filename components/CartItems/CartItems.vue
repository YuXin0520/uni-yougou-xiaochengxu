<template>
  <view class="items" @touchmove="handleTouchMove($event,cartItemInfo.goods_id)" @touchstart="handleTouchStart"
    @touchend="handleTouchEnd" >
    <view class="cart-items" :class="moveId==cartItemInfo.goods_id && moveLeft ? 'move-item' : ''">
      <!--单选按钮-->
      <view class="cart-items-radio">
        <radio color="#c00000" :checked="cartItemInfo.goods_state" @click="changeGoosState" />
      </view>
      <!--图片-->
      <view class="cart-items-image">
        <image :src="cartItemInfo.goods_small_logo"></image>
      </view>
      <!--商品信息-->
      <view class="cart-items-info">
        <!--商品名字-->
        <view class="cart-items-info-name">
          {{cartItemInfo.goods_name}}
        </view>
        <!--商品底部盒子-->
        <view class="cart-items-info-bottom">
          <!--商品价格-->
          <view class="cart-items-info-price">
            ￥{{Number(cartItemInfo.goods_price).toFixed(2)}}
          </view>
          <!--商品数量-->
          <view class="cart-items-info-acount">
            <uni-number-box :min="1" :value="cartItemInfo.goods_count" @change="changeGoodsCount" @blur="uniNumberBoxStatus = false"
              v-if="uniNumberBoxStatus" />
            <text @click="changeNumStatus" v-else >x{{cartItemInfo.goods_count}}</text>
          </view>
        </view>
      </view>
      <!--删除等组件-->
      <block v-for="(item,index) in options" :key="index">
        <view class="cart-item-options" :style="{'background-color':item.background}" @click="optionsItem(cartItemInfo,item)">
          {{item.text}}
        </view>
      </block>
    </view>
  </view>
</template>

<script>
  import CartItemsVue from './CartItems.vue';
  export default {
    props: {
      //传入的购物车商品item
      cartItemInfo: {
        type: Object,
      },
      moveId:{
        type:Number,
        default:0
      },
      //后边按钮的数据
      options: {
        type: Array,
        default: () => {
          return [{
              text: "收藏",
              background: "orange"
            },
            {
              text: "删除",
              background: "#ff0000"
            }
          ]
        }
      }
    },
    name: "CartItems",
    data() {
      return {
        //数字框的状态是否展示
        uniNumberBoxStatus: false,
        //moveLeft移动的左边值
        moveLeft: false,
        //myStyleObject
        startX: 0,
        startY: 0,
        //移动的 itemd
        //moveId:''
      };
    },
    methods: {
      //点击显示数量框
      changeNumStatus() {
        this.uniNumberBoxStatus = true
      },
      //输入框改变数量了
      changeGoodsCount(value) {
        const goods = this.cartItemInfo
        goods.goods_count = value
        this.$emit('changeGoodsCount', goods)
      },
      //改变单选框
      changeGoosState() {
        this.$emit('changeGoosState', this.cartItemInfo)
      },
      //滑动
      handleTouchStart(event) {
        const touch = event.touches[0];
        //计算起始滑动位置距离
        this.startX = touch.clientX;
        this.startY = touch.clientY;
      },
      handleTouchMove(event,id) {
        this.$emit('handleTouchMove',id)
        //第一种话滑动方法，给item项替换clas类
        const touch = event.touches[0];
        //滑动后的位置距离
        const moveX = touch.clientX;
        const moveY = touch.clientY;
        //计算水平移动距离跟垂直de移动距离
        const offsetX = moveX - this.startX;
        const offsetY = moveY - this.startY;
        if(offsetX<=0){
          this.moveLeft = true
        }else{
          this.moveLeft = false
        }
      },
      handleTouchEnd() {},
      //optionsItem点击删除等组件
      optionsItem(goods,item){
        if(item.text=='删除'){
          this.$emit('removeItem',goods)
        }else if(item.text == '收藏'){
          this.$emit('collectionItem',goods)
        }
      }
    },
    created() {
      //console.log(this.cartItemInfo)
    }
  }
</script>

<style lang="scss">
  page {
    background-color: #f2f2f2;
  }

  .items {
    margin: 10rpx;
    border-radius: 15rpx;
    background-color: #fff;
    overflow: hidden;
  }

  .cart-items {
    transition: transform 0.5s;
    position: relative;
    left: 0;
    top: 0;
    display: flex;

    &.move-item {
      transform: translateX(-300rpx);
    }

    .cart-items-radio {
      margin: 0 5rpx;
      display: flex;
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
      flex-shrink: 0;
      width: 480rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20rpx;

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
            color: #ccc;
            ;
          }
        }
      }
    }

    .cart-item-options {
      width: 150rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 18px;
      flex-shrink: 0;
    }
  }
</style>