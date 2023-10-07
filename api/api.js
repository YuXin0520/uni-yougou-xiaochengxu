import ajax from './ajax.js'
//请求轮播图的数据
export const useSwiperServe = ()=> ajax.get('/api/public/v1/home/swiperdata')
//请求分类导航的数据
export const useCateServe = ()=> ajax.get('/api/public/v1/home/catitems')
//请求楼层导航的数据
export const useFloorServe = ()=> ajax.get('/api/public/v1/home/floordata')