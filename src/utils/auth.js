import { getToken } from '@/api/modules/api.js'

export const loginInfo = () => {
  
}


export const authToken = async () => {
  const { data } = await getToken('test', '123456')
  if (data) {
    localStorage.setItem('wechat:authToken', data)
  }
}