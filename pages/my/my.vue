<template>
  <view class="my_container">
    <MyLoginWX v-if="token.length === 0"></MyLoginWX> 
    <MyUserInfo v-else></MyUserInfo>
  </view>
</template>

<script>

import {mapMutations,mapState,mapGetters} from 'vuex'
  import badgeMix from '../../mixins/tabbar-badge.js'
  export default {
    mixins: [badgeMix],
    data() {
      return {
      };
    },
    methods:{
    },
    onLoad() {
    },
    computed:{
      ...mapState('m_user',['token']),
    }
  }
</script>

<style lang="scss" scoped>
page, .my_container{
  height: 100%!important;
}
</style>
