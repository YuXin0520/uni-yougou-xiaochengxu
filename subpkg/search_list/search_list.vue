<template>
  <view class="">
    <!--搜索框组件-->
    <u-sticky :enable="enable">
      <view class="search-components">
        <uni-search-bar placeholder="请输入关键词" radius="100" cancelButton="none" :focus="true" v-model="searchValue"
          @clear="clear" @input="searchList" @confirm='confirmSearch' clearButton="always">
        </uni-search-bar>
      </view>
    </u-sticky>
    <!--搜索历史组件-->
    <view class="search-history" v-if="searchData.length == '0'">
      <view class="search-history-title">
        <text>搜索历史</text>
        <uni-icons type="trash" size="20" @tap="clearHistory"></uni-icons>
      </view>
      <view class="search-history-content">
        <view class="content-tag" v-for="(item,index) in historyData" :key="index">
          <u-tag :text="item" type="info " mode="light" @click="clickTag(item)" />
        </view>

      </view>
    </view>

    <!--搜索列表数据内容组件-->
    <view class="search-list-content" v-else>
      <view class="search-item-content" v-for="(item,index) in searchData" :key="index" @tap="goGoodsDetail(item)">
        <text class="item-name">{{item.goods_name}}</text>
        <uni-icons type="forward" size="20" class="item-icons"></uni-icons>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    useQsearchServe
  } from '@/api/search-ajax.js'
  export default {
    data() {
      return {
        //输入框的值
        searchValue: '',
        //吸顶监听
        enable: true,
        //防抖
        timer: null,
        //搜索列表书
        searchData: [],
        //搜获历史数据
        historyData: []
      };
    },
    methods: {
      //清空搜索内容
      clear(e) {
        this.searchValue = ''
      },
      //输入搜索关键词
      searchList(e) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.getQsearchList(this.searchValue)
          this.saveHistoryValue(this.searchValue)
        }, 500)
      },
      //确认搜索
      confirmSearch() {
        uni.navigateTo({
          url: '/subpkg/goods_list/goods_list?query=' + this.searchValue
        })
      },
      //储存历史关键词
      saveHistoryValue(value) {
        const result = this.historyData.indexOf(value)
        if (result != -1) {
          this.historyData.splice(result,1)
        }
        if(!value) return
        this.historyData.unshift(value)
        const searchHistory = JSON.stringify(this.historyData)
        uni.setStorageSync('search-history', searchHistory)
      },
      //点击tag搜索
      clickTag(item) {
        uni.navigateTo({
          url: '/subpkg/goods_list/goods_list?query=' + item
        })

      },
      //点击删除tag
      closeTag(item) {
        const result = this.historyData.indexOf(item)
        if (result != -1) {
          this.historyData.splice(result,1)
          const searchHistory = JSON.stringify(this.historyData)
          uni.setStorageSync('search-history', searchHistory)
        }
      },
      //发起搜索请求
      async getQsearchList(query) {
        if (query == '') return this.searchData = []
        const res = await useQsearchServe({
          query
        })
        this.searchData = res.message
      },
      //点击跳转商品列表
      goGoodsDetail(item) {
        uni.navigateTo({
          url: '/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id
        })
      },
      //清楚历史记录
      async clearHistory() {
        const res = await uni.$showModal('是否清除全部历史记录')
        if (res) {
          this.historyData = []
          uni.removeStorageSync('search-history')
          return uni.$shwoToast('清除历史记录成功')
        }
      }
    },
    onShow() {
      this.enable = true
    },
    onHide() {
      this.enable = false
    },
    onLoad() {
      const res = JSON.parse(uni.getStorageSync('search-history') || '[]')
      this.historyData = res
    }
  }
</script>

<style lang="scss">
  .search-components {
    background-color: #c00000;
  }

  .search-history-title {
    display: flex;
    justify-content: space-between;
    padding: 8rpx 22rpx;
    font-size: 32rpx;
    font-weight: 500;
    border-bottom: .1px solid #000;
  }

  .content-tag {
    margin: 8rpx;
  }

  .search-item-content {
    padding: 15rpx;
    border-bottom: 1rpx solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .item-name {
      white-space: nowrap;
      /* 防止换行 */
      overflow: hidden;
      /* 隐藏超出部分 */
      text-overflow: ellipsis;
      /* 显示省略号 */
      /* 设置容器宽度 */
      font-size: 30rpx;
    }

    .item-icons {}
  }

  .search-history-content {
    display: flex;
  }
</style>