<template>
  <view class="login_container">
    <uni-icons type="contact-filled" size="100" color="#AFAFAF"></uni-icons>
    <button type="primary" class="btn_login" @click="getUserProfile">一键登录</button>
    <text class="tips_text">登陆后尽享更多权限</text>
  </view>
</template>

<script>
  import {userWXLogin} from '@/api/my-ajax.js'
  import {mapMutations,mapState} from 'vuex'
  export default {
    name: "my-login",
    data() {
      return {
        
      };
    },
    computed: {
      ...mapState('m_user',['redict'])
    },
    methods: {
      ...mapMutations('m_user',['setStateUserInfo','setStateToken','setNavigatorTo']),
      //点击登录获取用户微信信息
      async getUserProfile(e) {
        const res = await uni.getUserProfile({
          desc:"获取微信信息用户登录"
        }).catch(err=>err)
        if(res.errMsg === 'getUserProfile:fail auth deny') return uni.$showToast('取消了授权')
        if(res.errMsg === 'getUserProfile:ok'){
          const userInfo = {
            nickName:res.userInfo.nickName,
            avatarUrl:res.userInfo.avatarUrl,
            gender:res.userInfo.gender
          }
          const queryInfo = {
            encryptedData:res.encryptedData,
            iv:res.iv,
            rawData:res.rawData,
            signature:res.signature,
            appId:"wx931501245c3d9011"
          }
          this.setStateUserInfo(userInfo)
          this.setStateToken('Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIzLCJpYXQiOjE1NjQ3MzAwNzksImV4cCI6MTAwMTU2NDczMDA3OH0.YPt-XeLnjV-_1ITaXGY2FhxmCe4NvXuRnRB8OMCfnPo')
          this.navigatorToBack()
          //this.getToken(queryInfo)
        }
      },
      //获取token
      // async getToken(info){
      //   const res =  await  uni.login()
      //   if(res.errMsg != 'login:ok') return uni.$showToast('登录失败')
      //   info.code = res.code
      //   const resToken = await userWXLogin(info)
      // },
      //挑战会原来的页面
      navigatorToBack(){
        if(this.redict && this.redict.optenType == 'switchTab'){
          uni.switchTab({
            url:this.redict.url,
            complete:()=>{
              this.setNavigatorTo(null)
            }
          })
        }
      }
    }
  }
</script>

<style lang="scss">
  .login_container {
    height: 750rpx;
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    &::after {
      content: ' ';
      display: block;
      width: 100%;
      height: 40px;
      background-color: white;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 100%;
      transform: translateY(50%);
    }

    .btn_login {
      width: 90%;
      border-radius: 100px;
      margin: 15px 0;
      background-color: #c00000;
    }

    .tips_text {
      font-size: 12px;
      color: gray;
    }
  }
</style>