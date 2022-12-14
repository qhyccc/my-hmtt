// 基于 axios 封装的请求模块
import theAxios from 'axios'

// 新建一个新的axios实例
const axios = theAxios.create({
  baseURL: 'http://toutiao.itheima.net', // 基地址
  timeout: 20000
})

// 导出自定义函数, 参数对象解构赋值
export default ({ url, method = 'GET', params = {}, data = {}, headers = {} }) => {
  return axios({
    url,
    method,
    params,
    data,
    headers
  })

// 以后换库, 只需要改这里, 逻辑页面不用动, 保证代码的复用性和独立性(高内聚低耦合)
//   return $.ajax({
//     url: url,
//     type: method,
//     data: data,
//     header: headers
//   })
}
