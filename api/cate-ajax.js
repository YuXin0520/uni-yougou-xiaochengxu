import ajax from './ajax.js'
//请求分类数据
export const useCategoryServe = ()=> ajax.get('/api/public/v1/categories')