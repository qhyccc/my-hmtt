import request from '@/utils/request.js'
import { getToken } from '@/utils/token.js'
// 用户 - 登录
export const loginAPI = ({ mobile, code }) => {
  return request({
    url: '/v1_0/authorizations',
    method: 'POST',
    data: {
      mobile,
      code
    }
  })
}
export const getUserChannelsAPI = () => request({
  url: '/v1_0/user/channels',
  headers: {
    Authorization: `Bearer ${getToken()}`
  }
})
export const getAllArticleListAPI = ({ channel_id, timestamp }) => request({
  url: '/v1_0/articles',
  method: 'GET',
  headers: {
    Authorization: `Bearer ${getToken()}`
  },
  params: {
    channel_id,
    timestamp
  }
})
