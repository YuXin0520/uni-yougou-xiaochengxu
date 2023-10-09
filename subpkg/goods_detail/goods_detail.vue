<template>
  <view v-if="goodsInfo.goods_introduce">
    <!--轮播图组件-->
    <MySwiper :list="goodsPics.length != 0 ? goodsPics : defaultPic" @clickSwiper="preview"></MySwiper>
    <!--商品信息组件-->
    <GoodsInfoBox :isCollection="isCollection" :goodsInfo="goodsInfo" @clickCollection="clickCollection"></GoodsInfoBox>
    <!--富文本编辑-->
    <u-parse :html="goodsInfo.goods_introduce"></u-parse>
    <!--商品导航-->
    <uni-goods-nav :fill="true" :options="options" :button-group="customButtonGroup" @click="onClick"
      @buttonClick="buttonClick" class="uni-goods-nav"/>
  </view>
</template>

<script>
  import {
    useGoodsDetailhServe
  } from "@/api/goods-ajax.js"
  export default {
    data() {
      return {
        //商品信息详情
        goodsInfo: {},
        //pics商品轮播图信息
        goodsPics: [],
        //没有商品轮播图时的默认图片
        defaultPic: [{
          pics_big: '../../static/img/defautlpicture.png'
        }],
        //点击收藏
        isCollection: false,
        //按钮
        options: [{
          icon: 'chat',
          text: '客服'
        }, {
          icon: 'cart',
          text: '购物车',
          info: 2
        }],
        //
        customButtonGroup: [{
            text: '加入购物车',
            backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)',
            color: '#fff'
          },
          {
            text: '立即购买',
            backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
            color: '#fff'
          }
        ]
      };
    },
    onLoad(e) {
      this.getGoodsInfo(e.goods_id)
    },
    methods: {
      //请求商品详情
      async getGoodsInfo(goods_id) {
        const res = await useGoodsDetailhServe({
          goods_id
        })
        res.message.goods_introduce = res.message.goods_introduce.replace(/<img/g, '<img style="display:block";')
          .replace(/webg/g, 'jpg')
        this.goodsInfo = res.message
        this.goodsPics = res.message.pics
        console.log(this.goodsInfo)
      },
      //点击图片
      preview(e) {
        const previewUrl = this.goodsPics.length != 0 ? this.goodsPics : this.defaultPic
        uni.previewImage({
          current: e.index,
          urls: previewUrl.map(item => item.pics_big)
        })
      },
      //点击收藏
      clickCollection() {
        this.isCollection = !this.isCollection
      },
      //onClick点击左侧的按钮
      onClick(e) {
        if(e.content.text == '客服'){
           console.log("客服",e)
        }else if(e.content.text == '购物车'){
           uni.switchTab({
             url:'/pages/cart/cart'
           })
        }
      },
      //buttonClick点击右侧的按钮
      buttonClick(e) {
        if(e.content.text == '加入购物车'){
           console.log("加入购物车",e)
        }else if(e.content.text == '立即购买'){
           console.log("立即购买",e)
        }
      }
    }
  }
</script>

<style lang="scss">
  page{
    padding-bottom:50px;
  }
.uni-goods-nav{
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>