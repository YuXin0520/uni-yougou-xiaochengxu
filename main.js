import App from './App'
import {myShwoToast,myShowModal} from "@/common/utils.js"

uni.$showToast = myShwoToast
uni.$showModal = myShowModal
// #ifndef VUE3
import Vue from 'vue'
import store from '@/store/index.js'
import uView from "uview-ui";
import './uni.promisify.adaptor'
Vue.use(uView);
Vue.config.productionTip = false
Vue.directive('v-uni-focus', {
  inserted(el, binding){
    // 在绑定元素时调用
    console.log(el),
    console.log(binding)
  }
});
App.mpType = 'app'
const app = new Vue({
  ...App,
  store
})
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif