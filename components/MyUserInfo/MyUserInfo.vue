<template>
  <view class="my_userinfo_container">
    <!-- 头像 -->
    <view class="top_box">
      <image :src="userInfo.avatarUrl" class="avatar"></image>
      <view class="nickname">
        {{userInfo.nickName}}
      </view>
    </view>
    <!-- 面板 -->
    <view class="panel_list">
      <!-- diyige -->
      <view class="panel">
        <view class="panel_body">
          <view class="panel_item">
            <text>0</text>
            <text>店铺</text>
          </view>
          <view class="panel_item" @click="goGoodsCollection">
            <text>{{collectionsCount}}</text>
            <text>收藏</text>
          </view>
          <view class="panel_item">
            <text>0</text>
            <text>关注</text>
          </view>
          <view class="panel_item">
            <text>0</text>
            <text>足迹</text>
          </view>
        </view>
      </view>
      <!-- 第二面板 -->
      <view class="panel">
        <view class="panel_title">
          我的订单
        </view>
        <view class="panel_body">
          <view class="panel_item">
            <uni-icons custom-prefix="iconfont" type="icon-dingdandaifukuan" color='#c00000' size="35"> </uni-icons>
            <text>待付款</text>
          </view>
          <view class="panel_item">
            <uni-icons custom-prefix="iconfont" type='icon-daishouhuo' color='#c00000' size="35"> </uni-icons>
            <text>待收货</text>
          </view>
          <view class="panel_item">
            <uni-icons custom-prefix="iconfont" type='icon-tuikuan' color='#c00000' size="30"> </uni-icons>
            <text>退款/退货</text>
          </view>
          <view class="panel_item">
            <uni-icons custom-prefix="iconfont" type='icon-dingdan' color='#c00000' size="35"> </uni-icons>
            <text>全部订单</text>
          </view>
        </view>
      </view>

      <!-- 第三 -->
      <view class="panel">
        <view class="panel_list_item" @click="chooseAddress">
          <text>收货地址</text>
          <uni-icons type="arrowright" size='15'></uni-icons>
        </view>
        <view class="panel_list_item">
          <text>联系客服</text>
          <uni-icons type="arrowright" size='15'></uni-icons>
        </view>
        <view class="panel_list_item" @click="loginout">
          <text>退出登陆</text>
          <uni-icons type="arrowright" size='15'></uni-icons>
        </view>
      </view>
    </view>

    <!--  -->

  </view>
</template>

<script>
  import {
    mapState,
    mapMutations,
    mapGetters
  } from 'vuex'
  export default {
    name: "my-userinfo",
    data() {
      return {

      };
    },
    methods: {
      ...mapMutations('m_user', ['setStateAddress', 'removerSateAll']),
      //点击选中地址
      async chooseAddress() {
        const res = await uni.chooseAddress().catch(err => err)
        this.setStateAddress(res)
      },
      //点击退出登录
      async loginout() {
        const res = await uni.$showModal('是否确认退出登录')
        if (res) {
          this.removerSateAll()
          return uni.$showToast('已退出登录')
        }
      },
      //点击跳转到收藏页面
      goGoodsCollection(){
        uni.navigateTo({
          url:'/subpkg/goods_collection/goods_collection'
        })
      }
    },
    computed: {
      ...mapState('m_user', ['userInfo']),
      ...mapGetters('m_collection', ['collectionsCount'])
    }
  }
</script>

<style lang="scss" scoped>
  .my_userinfo_container {
    height: 100%;
    background-color: #f4f4f4;

    .top_box {
      height: 400rpx;
      background-color: #c00000;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .avatar {
        width: 90px;
        height: 90px;
        border-radius: 45px;
        box-shadow: 0 1px 5px black;
      }

      .nickname {
        font-size: 16px;
        color: #fff;
        font-weight: bold;
        margin-top: 10px
      }
    }

    .panel_list {
      padding: 0 10px;
      position: relative;
      top: -10px;

      .panel {
        background-color: #fff;
        border-radius: 3px;
        margin-bottom: 8px;

        .panel_title {
          line-height: 45px;
          padding-left: 15px;
          font-size: 15px;
          border-bottom: 1px solid #f4f4f4;
        }

        .panel_body {
          display: flex;
          justify-content: space-around;

          .panel_item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            padding: 10px 0;
            font-size: 13px;
          }
        }
      }
    }

    .panel_list_item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 15px;
      padding: 15px 10px;
    }
  }
</style>