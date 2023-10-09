<template>
  <view>
    <view class="goods-list-item"  @click="goGoodsDetail(goods)">
      <!--左边图片区域-->
      <view class="goods-list-img">
        <image :src="goods.goods_small_logo || defaultPic"></image>
      </view>
      <!--右边内容区域-->
      <view class="goods-list-content">
        <view class="goods-list-content-name">
          {{goods.goods_name}}
        </view>
        <view class="goods-list-content-price">
          ￥{{Number(goods.goods_price).toFixed(2)}}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props:{
      goods:{
        type:Object,
      }
    },
    name:"GoodsItem",
    data() {
      return {
        defaultPic: '../../static/img/defautlpicture.png'
      };
    },
    methods:{
      //点击跳转详情页
      goGoodsDetail(goods) {
        uni.navigateTo({
          url: '/subpkg/goods_detail/goods_detail?goods_id=' + goods.goods_id
        })
      }
    }
  }
</script>

<style lang="scss">
  .goods-list-item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    margin: 2px 0;

    .goods-list-img {
      image {
        width: 100px;
        height: 100px;
        display: block;
      }
    }

    .goods-list-content {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
      padding: 5px;
      margin-left: 5px;

      .goods-list-content-name {
        /* 防止换行 */
        overflow: hidden;
        /* 隐藏超出部分 */
        text-overflow: ellipsis;
        /* 显示省略号 */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 2;
      }

      .goods-list-content-price {
        color: #ff0000;
        font-size: 18px;
      }
    }
  }
</style>