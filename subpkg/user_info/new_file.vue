<template>
  <view>
    <!--弹框-->
    <view class="info-box">
      <view class="info-box-img" @click="show = true">
        <image :src="defaultAvatar"></image>
      </view>
      <view class="info-box-text">
        <uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
          <uni-forms-item label="昵称" required name="name">
            <uni-easyinput v-model="valiFormData.name" placeholder="请输入昵称" />
          </uni-forms-item>
          <uni-forms-item label="性别" required>
            <uni-data-checkbox v-model="baseFormData.sex" :localdata="sexs" />
          </uni-forms-item>
        </uni-forms>
      </view>
    </view>
    <!--弹框-->
    <u-popup v-model="show" mode="bottom" border-radius="15">
      <view class="item avatar">
        <text>使用微信头像</text>
        <image :src="defaultAvatar"></image>
      </view>
      <view class="item" @click="openStyem('album')">
        打开相册
      </view>
      <view class="item" @click="openStyem('camera')">
        拍照
      </view>
      <view class="item" @click="show=false">取消</view>
    </u-popup>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        defaultAvatar: '../../static/img/avatar.png',
        wxAvatar: '',
        valiFormData: {
          name: '请输入昵称',
          sex: '0'
        },
      };
    },
    methods: {
      openStyem(sourceType) {
        uni.chooseImage({
          count: 1, //默认9
          sizeType: ['original','compressed'], //可以指定是原图还是压缩图，默认二者都有
          sourceType: [sourceType], //从相册选择
          success: function(res) {
            console.log(JSON.stringify(res.tempFilePaths));
          }
        });
      }
    }
  }
</script>

<style lang="scss">
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1rpx solid #f1f1f1;
    padding: 22rpx 0;
    font-size: 36rpx;

    &.avatar {
      flex-direction: column;

      image {
        width: 70rpx;
        height: 70rpx;
        display: block;
        margin: 5rpx 0;
      }
    }
  }

  .info-box-img {
    margin: 20rpx 0;
    display: flex;
    justify-content: center;
    align-items: center;src: ;

    image {
      display: block;
      width: 200rpx;
      height: 200rpx;
      border-radius: 50%;
    }
  }
  .example {
  		padding: 15px;
  		background-color: #fff;
  	}
</style>