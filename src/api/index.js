import axios from 'axios'
import _ from 'lodash'
// import { authToken } from '@/utils/auth.js'

// http request拦截器 添加一个请求拦截器
// http://192.168.50.27:1024/zrmc/rest
const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'http://www.thusnesstech.com/zrmc/rest' : 'http://www.thusnesstech.com/zrmc/rest'
})

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  if (!_.startsWith(config.url, '/tokens')) {
    _.set(config.headers, 'X-AUTH-TOKEN', `${localStorage.getItem('wechat:authToken')}`)
  }
  return config
})

// 响应拦截器
instance.interceptors.response.use(response => response, error => {
  const status = _.get(error, 'response.status', 0)
  const errorResponse = _.get(error, 'response.data', {})
  const { detail, message } = errorResponse
  switch (status) {
    case 401:
      // window.location.reload()
      throw new Error('401')
    case 404:
      throw new Error('无效的请求')
    case 500:
      throw new Error('服务异常')
    case 504:
      throw new Error('网络异常')
    default:
      throw new Error(detail || message)
      // return Promise.reject(error.response)
  }
})

export default instance
