<template>
  <view class="my_address">
    <!--小程序展示-->
    <view class="address_btn" v-if='JSON.stringify(address) === "{}"'>
      <button type="primary" size="mini" class="btn" @click="chooseAddress">请选择收货地址+</button>
    </view>
    <view class="address_content" v-else @click="chooseAddress">
      <view class="content_title">
        <view class="content_name">
          姓名：{{address.userName}}
        </view>
        <view class="content_phone">
          电话：{{address.telNumber}}
        </view>
      </view>
      <view class="content_address">
        地址：{{address.detailInfo}}
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"MyAddress",
    data() {
      return {
        address:{
        }
      };
    },
    methods:{
     chooseAddress(){
       uni.chooseLocation({
         success: function (res) {
         		console.log('位置名称：' + res.name);
         		console.log('详细地址：' + res.address);
         		console.log('纬度：' + res.latitude);
         		console.log('经度：' + res.longitude);
         	}
       })
     } 
    }
  }
</script>

<style lang="scss">
  .address_btn {
    height: 180rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;
    border-bottom: 1px solid #f1f1f1;

  }

  .address_content {
    padding: 25rpx;
    background-color: #fff;

    .content_title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15rpx 0;
    }

    .content_address {
      padding: 15rpx 0;
    }
  }
</style>