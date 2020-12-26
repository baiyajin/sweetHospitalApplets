import { request, request2, request3 } from '@/api/request.js'

// 获取用户信息
export const getToken = (username, password) => request2('/tokens', { username, password })

// 登录接口
export const login = (sufferName, sufferPhone) => request2('/suffer/sufferLogin', { sufferName, sufferPhone })

// 登录接口
export const regster = (payload) => request('/suffer/sufferRegister', payload)

// 测试问卷列表
export const typeList = (action) => request3('/deseConfig', action)

// 提交问卷
export const submit = (payload) => request('/sufferdese/sufferdeseSubmit', payload)

// 查询得分
export const getScop = (action) => request3('/sufferdese', action)