export default {
  namespaced: true,
  state: () => ({
    //点击收藏的状态
    address: JSON.parse(uni.getStorageSync('address') || '{}'),
    token:uni.getStorageSync('token') || '',
    userInfo:JSON.parse(uni.getStorageSync('user-info') || '{}'),
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
    },
    //存储用户信息
    setStateUserInfo(state,userInfo){
      state.userInfo = userInfo
      this.commit('m_user/saveStorageUserInfo')
    },
    //持久化存储用户信息到本地
    saveStorageUserInfo(state){
      uni.setStorageSync('user-info', JSON.stringify(state.userInfo))
    },
    //设置token
    setStateToken(state,token){
      state.token = token
      uni.setStorageSync('token', token)
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