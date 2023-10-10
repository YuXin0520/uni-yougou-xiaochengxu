export default {
  namespaced: true,
  state: {
    //购物车数据
    cart: JSON.parse(uni.getStorageSync('cart_info_array') || '[]')
  },
  mutations: {
    //加入购物车
    addToCart(state,goods){
      // -------方法一--------------
      // 先找购物车里有没有这件商品
      const findRestult = state.cart.find(x=>x.goods_id == goods.goods_id)
      if(!findRestult){
        //没有就加入
        state.cart.push(goods)
      }else{
        //要拿到当前的商品对象，在数量上++
        findRestult.goods_count++
      }
      const cart_info_array = JSON.stringify(state.cart)
      uni.setStorageSync('cart_info_array',cart_info_array)
    },
    //改变单个商品的状态
    changeCartGoodsState(state,goods){
      const findRestult = state.cart.find(x=>x.goods_id == goods.goods_id)
      if(findRestult){
        findRestult.goods_state = !findRestult.goods_state
      }
      const cart_info_array = JSON.stringify(state.cart)
      uni.setStorageSync('cart_info_array',cart_info_array)
    },
    //改变单个商品的数量
    changeCartGoodsCount(state,goods){
      const findRestult = state.cart.find(x=>x.goods_id == goods.goods_id)
      console.log(goods.goods_count)
      if(findRestult){
        findRestult.goods_count = goods.goods_count
      }
      const cart_info_array = JSON.stringify(state.cart)
      uni.setStorageSync('cart_info_array',cart_info_array)
    }
  },
  actions: {},
  getters: {
    cartCountTotal(state){
      let total = 0
      state.cart.forEach(x => total += x.goods_count)
      return total
    }
  }
}