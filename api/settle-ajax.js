import ajax from '@/api/ajax.js'

//请求订单编号
export const useOrderCreate = (params) => ajax.post('/api/public/v1/my/orders/create',{params})