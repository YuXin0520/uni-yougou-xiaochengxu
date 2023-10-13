import ajax from './ajax.js'
//请求登路接口获取toekn
export const userWXLogin = (params)=> ajax.post('/api/public/v1/users/wxlogin',params)