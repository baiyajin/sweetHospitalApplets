import fetch from './index'

export const request = (url, data) => {
  return new Promise((resolve, reject) => {
    fetch({
      url,
      method: 'post',
      data
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export const request2 = (url, params) => {
  return new Promise((resolve, reject) => {
    fetch({
      url,
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

export const request3 = (url, action, data) => {
  
  return new Promise((resolve, reject) => {
    fetch({
      url: `${url}/${action}`,
      data,
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}