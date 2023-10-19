<template>
  <view>
    <button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
      <image class="avatar" :src="defaultUrl"></image>
    </button>
    
    <view class="input-box">
      <view class="input-text">
        昵称
      </view>
      <view class="input-btn">
        <input type="nickname" v-model="nickName" class="weui-input" placeholder="请输入昵称" />
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        defaultUrl: '../../static/img/avatar.png',
        nickName:''
      };
    },
    methods: {
      onChooseAvatar(e) {
        const avatarUrl = e.detail.avatarUrl
        this.defaultUrl = avatarUrl
      }
    }
  }
</script>

<style lang="scss" scoped>
  .avatar-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200rpx;
    background-color: #fff;
  }
  .avatar {
    width: 100rpx;
    height: 100rpx;
  }
  .input-box{
    display: flex;
    font-size: 36rpx;
    .input-text{
      padding: 20rpx 40rpx;
    }
    .input-btn{
      flex:1;
      .weui-input{
        height: 100%;
      }
    }
  }
</style>