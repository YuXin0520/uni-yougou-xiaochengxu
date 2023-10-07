import ajax from './ajax.js'

export const useCategoryServe = ()=> ajax.get('/api/public/v1/categories')