import {useCategoryServe} from '@/api/cate-ajax.js'

//处理数据，把数据处理成兼容uview组件结构的
const cateList = []
const getCateList = async()=>{
  const res = await useCategoryServe()
  res.message.forEach(item=>{
      if(item.children){
        item.children.forEach(k=>{
          cateList.push(k)
        })
      }
  })
}
getCateList()
export default cateList
// export default[
//    {
//       "name": "女装",
//       "foods": [
//           {
//             "name": "A字裙",
//             "key": "A字裙",
//             "icon": "https://cdn.uviewui.com/uview/common/classify/1/1.jpg",
//             "cat": 10
//           },
//           {
//             "name": "T恤",
//             "key": "T恤",
//             "icon": "https://cdn.uviewui.com/uview/common/classify/1/2.jpg",
//             "cat": 10
//           },
//           {
//             "name": "半身裙",
//             "key": "半身裙",
//             "icon": "https://cdn.uviewui.com/uview/common/classify/1/3.jpg",
//             "cat": 10
//           },
//           {
//             "name": "衬衫",
//             "key": "衬衫",
//             "icon": "https://cdn.uviewui.com/uview/common/classify/1/4.jpg",
//             "cat": 10
//           },
//           {
//             "name": "短裙",
//             "key": "短裙",
//             "icon": "https://cdn.uviewui.com/uview/common/classify/1/5.jpg",
//             "cat": 10
//           },
//           {
//             "name": "阔腿裤",
//             "key": "阔腿裤",
//             "icon": "https://cdn.uviewui.com/uview/common/classify/1/6.jpg",
//             "cat": 10
//           },
//           {
//             "name": "连衣裙",
//             "key": "连衣裙",
//             "icon": "https://cdn.uviewui.com/uview/common/classify/1/7.jpg",
//             "cat": 10
//           },
//           {
//             "name": "妈妈装",
//             "key": "妈妈装",
//             "icon": "https://cdn.uviewui.com/uview/common/classify/1/8.jpg",
//             "cat": 10
//           },
//           {
//             "name": "牛仔裤",
//             "key": "牛仔裤",
//             "icon": "https://cdn.uviewui.com/uview/common/classify/1/9.jpg",
//             "cat": 10
//           },
//           {
//             "name": "情侣装",
//             "key": "情侣装",
//             "icon": "https://cdn.uviewui.com/uview/common/classify/1/10.jpg",
//             "cat": 10
//           },
//           {
//             "name": "休闲裤",
//             "key": "休闲裤",
//             "icon": "https://cdn.uviewui.com/uview/common/classify/1/11.jpg",
//             "cat": 10
//           },
//           {
//             "name": "雪纺衫",
//             "key": "雪纺衫",
//             "icon": "https://cdn.uviewui.com/uview/common/classify/1/12.jpg",
//             "cat": 10
//           },
//           {
//             "name": "防晒衣",
//             "key": "防晒衣",
//             "icon": "https://cdn.uviewui.com/uview/common/classify/1/13.jpg",
//             "cat": 10
//           },
//           {
//             "name": "礼服/婚纱",
//             "key": "礼服婚纱",
//             "icon": "https://cdn.uviewui.com/uview/common/classify/1/14.jpg",
//             "cat": 10
//           }
//       ]
//    },
//    {
//     "name": "美食",
//     "foods": [
//         {
//           "name": "火锅",
//           "key": "火锅",
//           "icon": "https://cdn.uviewui.com/uview/common/classify/2/1.jpg",
//           "cat": 6
//         },
//         {
//           "name": "糕点饼干",
//           "key": "糕点饼干",
//           "icon": "https://cdn.uviewui.com/uview/common/classify/2/2.jpg",
//           "cat": 6
//         },
//         {
//           "name": "坚果果干",
//           "key": "坚果果干",
//           "icon": "https://cdn.uviewui.com/uview/common/classify/2/3.jpg",
//           "cat": 6
//         },
//         {
//           "name": "酒类",
//           "key": "酒类",
//           "icon": "https://cdn.uviewui.com/uview/common/classify/2/4.jpg",
//           "cat": 6
//         },
//         {
//           "name": "辣条",
//           "key": "辣条",
//           "icon": "https://cdn.uviewui.com/uview/common/classify/2/5.jpg",
//           "cat": 6
//         },
//         {
//           "name": "大礼包",
//           "key": "大礼包",
//           "icon": "https://cdn.uviewui.com/uview/common/classify/2/6.jpg",
//           "cat": 6
//         },
//         {
//           "name": "精品茗茶",
//           "key": "茶",
//           "icon": "https://cdn.uviewui.com/uview/common/classify/2/7.jpg",
//           "cat": 6
//         },
//         {
//           "name": "休闲食品",
//           "key": "休闲食品",
//           "icon": "https://cdn.uviewui.com/uview/common/classify/2/8.jpg",
//           "cat": 6
//         },
//         {
//           "name": "糖果巧克力",
//           "key": "糖果巧克力",
//           "icon": "https://cdn.uviewui.com/uview/common/classify/2/9.jpg",
//           "cat": 6
//         },
//         {
//           "name": "方便速食",
//           "key": "方便速食",
//           "icon": "https://cdn.uviewui.com/uview/common/classify/2/10.jpg",
//           "cat": 6
//         },
//         {
//           "name": "营养代餐",
//           "key": "营养代餐",
//           "icon": "https://cdn.uviewui.com/uview/common/classify/2/11.jpg",
//           "cat": 6
//         },
//         {
//           "name": "粮油副食",
//           "key": "粮油",
//           "icon": "https://cdn.uviewui.com/uview/common/classify/2/12.jpg",
//           "cat": 6
//         },
//         {
//           "name": "生鲜水果",
//           "key": "水果",
//           "icon": "https://cdn.uviewui.com/uview/common/classify/2/13.jpg",
//           "cat": 6
//         },
//         {
//           "name": "饮品",
//           "key": "饮品",
//           "icon": "https://cdn.uviewui.com/uview/common/classify/2/14.jpg",
//           "cat": 6
//         }
//         ]
//     }
// ]