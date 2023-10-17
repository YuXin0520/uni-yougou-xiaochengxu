import ajax from 'uni-ajax' // 引入 uni-ajax 模块
import store from '@/store'
//ajax.defaults.baseURL = 'https://api-hmugo-web.itheima.net'
const instance = ajax.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  baseURL: 'https://api-hmugo-web.itheima.net'
}) // 创建请求实例

instance.interceptors.request.use((config) => {
    uni.showLoading({
      title: '数据加载中...'
    })
    //判断是否需要登录认证
    const optionsResult = config.url.indexOf('/my')
    if(optionsResult !== -1){
      config.headers.Authorization = store.state.m_user.token
    }
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }) // 添加请求拦截器
instance.interceptors.response.use((response) => {
    uni.hideLoading()
    if (response.data.meta.status !== 200) {
      return uni.$showToast(response.data.meta.msg)
    }
    return response.data
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    //401或权限过期
    // 对响应错误做点什么
    return Promise.reject(error)
  }) // 添加响应拦截器

export default instance // 导出创建后的实例