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
        <uni-icons type="arrowright" size="16"></uni-icons>
      </view>
      <view class="content_address">
        地址：{{addstr}}
      </view>
    </view>
  </view>
</template>

<script>
  import {mapState,mapMutations,mapGetters} from 'vuex'
  export default {
    name: "MyAddress",
    data() {
      return {
      };
    },
    created(){
    },
    methods: {
      ...mapMutations('m_user',['setStateAddress']),
      //点击获取地址信息
     async chooseAddress() {
         //判断是否授权
      //uni.getSetting({
      //   success(res) {
      //     console.log(res)
      //     if (!res.authSetting['scope.address']) {
      //       uni.showModal({
      //         title: '提示',
      //         content: '您还未授权获取收货地址信息，是否去设置页面授权？',
      //         success(res) {
      //           if (res.confirm) {
      //             uni.openSetting({
      //               success(res) {
      //                 console.log(res.authSetting);
      //               }
      //             });
      //           }
      //         }
      //       });
      //     } else {
      //       console.log('已授权获取收货地址信息');
      //     }
      //   }
      // });
      const res = await  uni.chooseAddress().catch(err=>err)
      this.setStateAddress(res)
      },
    }, 
    computed:{
      ...mapState('m_user',['address']),
      ...mapGetters('m_user',['addstr'])
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