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
       console.log("res")
       uni.chooseAddress({
         success(res) {
             console.log(res.userName)
             console.log(res.postalCode)
             console.log(res.provinceName)
             console.log(res.cityName)
             console.log(res.countyName)
             console.log(res.detailInfo)
             console.log(res.nationalCode)
             console.log(res.telNumber)
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