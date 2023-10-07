<template>
  <view>
    <!-- 楼层组件 -->
    <view class="floor-list" v-for="(item,index) in list" :key="index">
      <!-- 楼层标题 -->
      <view class="floor-title">
        <image :src="item.floor_title.image_src"></image>
      </view>
      <!-- 楼层内容 -->
      <view class="floor-box">
        <!-- 左边 -->
        <view class="left-img-box">
          <image :src="item.product_list[0].image_src" :style="{width:item.product_list[0].image_width + 'rpx'}"
            mode="widthFix" @click="goFloorDetail(item.product_list[0].navigator_url)">
          </image>
        </view>
        <!-- 右边 -->
        <view class="right-img-box">
          <view class="right-img-item" v-for="(item2,index2) in item.product_list" :key="index2">
            <image :src="item2.image_src" mode="widthFix" v-if="index2 !== 0" :style="{width:item2.image_width + 'rpx'}"
              @click="goFloorDetail(item2.navigator_url)"></image>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
      }
    },
    name: "HomeFloor",
    data() {
      return {

      };
    },
    methods:{
      goFloorDetail(navigator_url){
        const query = navigator_url.split('=')[1]
        uni.navigateTo({
          url:'/subpkg/goods_list/goods_list?query='+query
        })
      }
    }
  }
</script>

<style lang="scss">
  .floor-list {
    margin: 40upx 0;
    padding-left: 10upx;
  }

  .floor-title {
    display: flex;

    image {
      width: 100%;
      height: 60upx;
    }
  }

  .floor-box {
    display: flex;

    .right-img-box {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
</style>