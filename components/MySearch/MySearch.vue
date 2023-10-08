<template>
  <u-sticky :enable="enable">
    <view class="u-search-box">
      <view class="u-search-inner" @click="goSearchList">
        <u-icon name="search" color="#909399" :size="28"></u-icon>
        <text class="u-search-text">搜索</text>
      </view>
    </view>
  </u-sticky>

</template>

<script>
  export default {
    props:['enable'],
    name: "MySearch",
    data() {
      return {
      };
    },
    methods:{
      //点击跳转搜索列表页
      goSearchList(){
        uni.navigateTo({
          url:'/subpkg/search_list/search_list'
        })
      },
    },
  }
</script>

<style lang="scss">
  .u-search-box {
    background-color: #c00000;
    padding: 18rpx 30rpx;
    text-align: center;
  }

  .u-search-inner {
    background-color: #fff;
    border-radius: 100rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10rpx 16rpx;
  }

  .u-search-text {
    font-size: 26rpx;
    color: $u-tips-color;
    margin-left: 10rpx;
  }
</style>