//tabbar标签购物车的徽标
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters('m_cart',['cartCountTotal'])
  },
  onShow(){
    this.setBadge()
  },
  methods:{
    setBadge(){
      uni.setTabBarBadge({
        index:2,
        text:this.cartCountTotal + ''
      })
    }
  },
  watch:{
    cartCountTotal(newValue){
      this.setBadge()
    },
    immedate:true
  }
}