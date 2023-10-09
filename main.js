import App from './App'
import {myShwoToast,myShowModal} from "@/common/utils.js"
uni.$showToast = myShwoToast
uni.$showModal = myShowModal
// #ifndef VUE3
import Vue from 'vue'
import uView from "uview-ui";
import './uni.promisify.adaptor'
Vue.use(uView);
Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
  ...App
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