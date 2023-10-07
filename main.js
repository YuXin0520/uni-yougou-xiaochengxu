import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import uView from "uview-ui";
import './uni.promisify.adaptor'
Vue.use(uView);
Vue.config.productionTip = false
//封装弹框方法
uni.$showToast = (title='数据请求失败！',duration=1500,icon='none') =>{
  uni.showToast({
    title,
    duration,
    icon
  })
}
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif