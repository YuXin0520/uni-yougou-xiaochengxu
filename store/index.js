import Vue from 'vue'
import VueX from 'vuex'
//引入购物车数据模块
import moduleCart from '@/store/cart.js'
import moduleUser from '@/store/user.js'
//注册vuex
Vue.use(VueX)

const store  = new VueX.Store({
  modules:{
    'm_cart':moduleCart,
    "m_user":moduleUser
  }
})

export default store