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
    },
    //点击全选 按钮
    changeAllstatus(state,status){
      state.cart.forEach(x=>x.goods_state = status)
      const cart_info_array = JSON.stringify(state.cart)
      uni.setStorageSync('cart_info_array',cart_info_array)
    }
  },
  actions: {},
  getters: {
    //计算商品总数
    cartCountTotal(state){
      let total = 0
      state.cart.forEach(x => total += x.goods_count)
      return total
    },
    //计算选中商品价格
    cartStatusPrice(state){
      let totalPrice = 0
      const selectProduct = state.cart.filter(x=>x.goods_state == true)
      selectProduct.forEach(x=> totalPrice += x.goods_price)
      return totalPrice
    },
    //计算选中 商品总数
    cartStatusCout(state){
      let selectTotal = 0
      const selectProduct = state.cart.filter(x=>x.goods_state == true)
      selectProduct.forEach(x=> selectTotal += x.goods_count)
      return selectTotal
    },
    //计算全选框的状态
    cartAllRadio(state){
      let status = true
      state.cart.forEach(x=>{
        if(!x.goods_state){
         status =  false
        }
      })
      return status
    }
  }
}