export default {
  namespaced: true,
  state: () => ({
    //点击收藏的状态
    address: JSON.parse(uni.getStorageSync('address') || '{}')
  }),
  mutations: {
    //持久化存储地址
    savaStorageAddress(state) {
      uni.setStorageSync('address', JSON.stringify(state.address))
    },
    //设置state中address的值
    setStateAddress(state, address) {
      state.address = address
      this.commit('m_user/savaStorageAddress')
    }
  },
  actions: {},
  getters: {
    addstr(state){
      if(!state.address.provinceName) return ''
      return state.address.provinceName + state.address.cityName + state.address.countyName + state.address.detailInfo
    }
  }
}