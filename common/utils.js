//封装弹框方法
export const myShwoToast = (title = '数据请求失败！', icon = 'none',duration = 1500) => {
    uni.showToast({
      title,
      duration,
      icon
    })
  }
//封装确认弹框方法
export const myShowModal = (content = '是否确认删除') => {
    return new Promise((resolve, reject) => {
      uni.showModal({
        title: "提示",
        content,
        success: (res) => {
          if (res.confirm) {
            resolve(true); // 用户点击确定，返回true
          } else if (res.cancel) {
            resolve(false); // 用户点击取消，返回false
          }
        },
        fail: (err) => {
          reject(err); // showModal调用失败，返回错误信息
        }
      });
    });
  }