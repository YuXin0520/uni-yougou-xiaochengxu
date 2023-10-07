<template>
  <!--左右不联动的三级分类组件-->
  <view class="scroll-list">
    <!--左边导航-->
    <scroll-view class="scroll-left" scroll-y='true' :style="{height:vh + 'px'}">
      <view v-for="(item,index) in categoryList" :key="index" class="left-nav" :class="index == aciveIndex ? 'active' : '0'" @click="changeActive(index)">{{item.cat_name}}</view>
    </scroll-view>
    <!--右边数据-->
    <scroll-view class="scroll-right" scroll-y='true' :style="{height:vh + 'px'}">
      <!--二级分类名字-->
      <view v-for="(item,index) in catelevel2" :key="index" >
        <view class="right-title">
          /{{item.cat_name}}/
        </view>
         <!--三级分类-->
        <view class="right-content" >
            <view class="content-item" v-for="item2,index in item.children" :key='index' @click="goCateDetail(item2)">
              <image :src="item2.cat_icon" mode="widthFix"></image>
              <text>{{item2.cat_name}}</text>
            </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  import {useCategoryServe} from '@/api/cate-ajax.js'
  export default {
    data() {
      return {
        //设备可使用的高度
        vh:'300',
        //active激活的选项
        aciveIndex:0,
        //总数据
        categoryList:[],
        //右侧数据
        catelevel2:[]
      };
    },
    onLoad() {
      this.getCategoryList()
      this.vh = uni.getSystemInfoSync().windowHeight
    },
    methods:{
      //获取分类数据
     async getCategoryList(){
        const res = await useCategoryServe()
        this.categoryList = res.message
        this.catelevel2 = this.categoryList[0].children
      },
      //改变高亮
      changeActive(index){
        this.aciveIndex = index
        this.catelevel2 = this.categoryList[index].children
      },
      //跳转查询
      goCateDetail(item){
        uni.navigateTo({
          //url:'/subpkg/goods_list/goods_list?query='+item.cat_name
          url:'/subpkg/goods_list/goods_list?cid='+item.cat_id
        })
      }
    }
  }
</script>

<style lang="scss">
.scroll-list{
  display: flex;
  .scroll-left{
    width:120px;
    .left-nav{
      height: 60px;
      background-color: #f7f7f7;
      line-height: 60px;
      font-size: 12px;
      text-align:center;
      &.active{
        background: #fff;
        position: relative;
        &::after{
          content: ' ';
          border-left: 8rpx solid #c00000;
          height: 60rpx;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
  .right-title{
    font-weight: bold;
    padding: 15px 0;
    text-align: center;
    font-size: 16px;
  }
  .right-content{
    display: flex;
    flex-wrap: wrap;
    .content-item{
      width: 33.3%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 6px 0 ;
      image{
        width: 60px;
        height: 60px;
      }
      text{
        margin-top: 5px;
        text-align: center;
      }
    }
  }
}
</style>