import ajax from './ajax.js'

export const useQsearchServe = (params)=> ajax.get('/api/public/v1/goods/qsearch',params)