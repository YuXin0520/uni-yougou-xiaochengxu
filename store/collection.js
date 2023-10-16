export default{
  namespaced: true,
  state: {
    //点击收藏的状态
    collection:JSON.parse(uni.getStorageSync('collections') || '[]')
  },
  mutations: {
    //设置收藏的产品
    setStateCollection(state,product){
      const findResult = state.collection.find(x=> x.goods_id == product.goods_id)
      if(!findResult){
        state.collection.push(product)
      }else{
        const index = state.collection.indexOf(findResult)
        state.collection.splice(index,1)
      }
      uni.setStorageSync('collections',JSON.stringify(state.collection))
    },
    //移除商品
    removeStateCollection(state,product){
    }
  },
  actions: {},
  getters: {
      collectionStatus(state){
        
      },
      //收藏商品的数量
      collectionsCount(state){
        let count = 0
        state.collection.forEach(x => count+=1)
        return count
      }
  }
}