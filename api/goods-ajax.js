import ajax from './ajax.js'
//搜索输入框请求
export const useQsearchServe = (params)=> ajax.get('/api/public/v1/goods/qsearch',params)
//点击类别请求
export const useSearchServe = (params)=> ajax.get('/api/public/v1/goods/search',params)
//商品详情
export const useGoodsDetailhServe = (params)=> ajax.get('/api/public/v1/goods/detail',params)