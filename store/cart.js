export default {
  namespaced: true,
  state: {
    //购物车数据
    cart: []
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