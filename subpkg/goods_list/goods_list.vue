<template>
  <view>
    <!--商品列表-->
    <block v-for="(item,index) in goodsList" :key="index">
      <GoodsListItem :goods='item'></GoodsListItem>
    </block>
    <!--底部-->
    <view class="noMoreProduct" v-if="total>0 && total === goodsList.length">
      ---我也是有底线的---
    </view>
    <!--返回顶部-->
    <u-back-top :scroll-top="scrollTop" top="1000"></u-back-top>
  </view>
</template>

<script>
  import {
    useSearchServe
  } from "@/api/goods-ajax.js"
  export default {
    data() {
      return {
        //传递给后端的参数
        queryObj: {
          query: '', //查询关键词
          cid: '', //商品分类id
          pagenum: 1, //页码
          pagesize: 10, //每页几条数据
        },
        goodsList: [], //商品列表数据
        total: 0, //总数
        scrollTop: 0, //顶部的距离
        isLoading:false,//节流阀
      };
    },
    onLoad(options) {
      this.queryObj.query = options.query || ''
      this.queryObj.cid = options.cid || ''
      this.getGoodsList(this.queryObj)
    },
    methods: {
      //请求接口数据
      async getGoodsList(params, cb) {
        //开启节流
        this.isLoading = true
        const res = await useSearchServe(params)
        this.goodsList = [...this.goodsList, ...res.message.goods]
        this.total = res.message.total
        cb && cb
        //数据请求完成关闭节流
        this.isLoading = false
      },
      //返回顶部按钮
      onPageScroll(e) {
        this.scrollTop = e.scrollTop;
      }
    },
    //下拉加载
    onReachBottom() {
      //先判断是否在请求中，是的话就返回不发送请求
      if(this.isLoading) return 
      if (this.queryObj.pagesize * this.queryObj.pagenum >= this.total) return uni.$showToast('没有更多商品了~')
      this.queryObj.pagenum++
      this.getGoodsList(this.queryObj)
    },
    onPullDownRefresh() {
      this.queryObj.pagenum = 1,
      this.goodsList = [],
      this.total = 0,
      this.isLoading = false
      this.getGoodsList(this.queryObj, uni.stopPullDownRefresh())
    }
  }
</script>

<style lang="scss">
  .noMoreProduct {
    text-align: center;
    color: #ccc;
  }
</style>