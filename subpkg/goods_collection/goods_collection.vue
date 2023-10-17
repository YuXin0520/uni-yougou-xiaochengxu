<template>
  <view class="wrap" v-if="showHide">
    <u-button @click="clear" v-if="flowList.length !== 0">清空列表</u-button>
    <view class="empty-box" v-else>
      <u-empty text="快去收藏一个吧~" mode="list"></u-empty>
    </view>
    <u-waterfall v-model="flowList" ref="uWaterfall" :key="key">
      <template v-slot:left="{leftList}">
        <view class="demo-warter" v-for="(item, index) in leftList" :key="item.id" @click="goGoodsDetail(item.id)">
          <!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
          <u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="item.id"
            effect="linear"></u-lazy-load>
          <view class="demo-title">
            {{item.title}}
          </view>
          <view class="demo-price">
            {{item.price}}元
          </view>
          <view class="demo-tag">
            <view class="demo-tag-owner">
              自营
            </view>
            <view class="demo-tag-text">
              放心购
            </view>
          </view>
          <view @click.stop="remove(item.id)">
            <u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close"></u-icon>
          </view>
        </view>
      </template>
      <template v-slot:right="{rightList}">
        <view class="demo-warter" v-for="(item, index) in rightList" :key="item.id" @click="goGoodsDetail(item.id)">
          <u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="item.id"
            effect="linear"></u-lazy-load>
          <view class="demo-title">
            {{item.title}}
          </view>
          <view class="demo-price">
            {{item.price}}元
          </view>
          <view class="demo-tag">
            <view class="demo-tag-owner">
              自营
            </view>
            <view class="demo-tag-text">
              放心购
            </view>
          </view>
          <view @click.stop="remove(item.id)">
            <u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close"></u-icon>
          </view>
        </view>
      </template>
    </u-waterfall>
  </view>

</template>

<script>
  import {
    mapState,
    mapMutations,
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        flowList: [],
        showHide:true,
        key:Math.random()* 100
      }
    },
    onLoad() {
      this.vueSetFlowerList()
      //this.setFlowerList()
    },
    onShow() {
      this.showHide = true
      this.vueSetFlowerList()
     // this.setFlowerList()
      console.log(this.flowList)
    },
    onHide(){
      this.showHide=false
    },
    onReachBottom() {

    },
    methods: {
      ...mapMutations('m_collection', ['removeStateCollection', 'clearAllStateCollection']),
      //给列表赋值
      setFlowerList() {
        this.flowList = []
        this.collection.forEach(x => {
          const item = {
            id: x.goods_id,
            title: x.goods_name,
            price: x.goods_price,
            image: x.goods_small_logo
          }
          this.flowList.push(item)
        })
      },
      //set给列表夫hi
      vueSetFlowerList(){
        this.$set(this, 'flowList', this.NewFlowList);
      },
      //移除收藏
      remove(id) {
        this.$refs.uWaterfall.remove(id);
        this.removeStateCollection(id)
      },
      //清空全部
      clear() {
        this.$refs.uWaterfall.clear();
        this.clearAllStateCollection()
      },
      //跳转到商品详情
      goGoodsDetail(id) {
        uni.navigateTo({
          url: '/subpkg/goods_detail/goods_detail?goods_id=' + id
        })
      }
    },
    computed: {
      ...mapState('m_collection', ['collection']),
      NewFlowList() {
        return this.collection.map(item => {
          return {
            id: item.goods_id,
            title: item.goods_name,
            price: item.goods_price,
            image: item.goods_small_logo
          }
        })
        // return this.collection.map(({
        //   goods_id,
        //   goods_name,
        //   goods_price,
        //   goods_small_logo
        // }) => ({
        //   goods_id,
        //   goods_name,
        //   goods_price,
        //   goods_small_logo
        // }))
      }
    }
  }
</script>

<style>
  /* page不能写带scope的style标签中，否则无效 */
  page {
    background-color: rgb(240, 240, 240);
  }
</style>

<style lang="scss" scoped>
  .empty-box {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .demo-warter {
    border-radius: 8px;
    margin: 5px;
    background-color: #ffffff;
    padding: 8px;
    position: relative;
  }

  .u-close {
    position: absolute;
    top: 32rpx;
    right: 32rpx;
  }

  .demo-image {
    width: 100%;
    border-radius: 4px;
  }

  .demo-title {
    font-size: 30rpx;
    margin-top: 5px;
    color: $u-main-color;
  }

  .demo-tag {
    display: flex;
    margin-top: 5px;
  }

  .demo-tag-owner {
    background-color: $u-type-error;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    padding: 4rpx 14rpx;
    border-radius: 50rpx;
    font-size: 20rpx;
    line-height: 1;
  }

  .demo-tag-text {
    border: 1px solid $u-type-primary;
    color: $u-type-primary;
    margin-left: 10px;
    border-radius: 50rpx;
    line-height: 1;
    padding: 4rpx 14rpx;
    display: flex;
    align-items: center;
    border-radius: 50rpx;
    font-size: 20rpx;
  }

  .demo-price {
    font-size: 30rpx;
    color: $u-type-error;
    margin-top: 5px;
  }

  .demo-shop {
    font-size: 22rpx;
    color: $u-tips-color;
    margin-top: 5px;
  }
</style>