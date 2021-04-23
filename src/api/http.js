import axios from 'axios' // 引入axios
import crypto from '../util/crypto'
// todo 开启 异常重定向
import router from '../router'
// axios.defaults.headers.post['Content-Type'] = 'application/json'
// 设置请求头上传token
// axios.default.headers.post['authorization'] =

// 在跨域请求时，不会携带用户凭证；返回的 response 里也会忽略 cookie
// axios.defaults.withCredentials = false

// axios.defaults.baseURL = 'http://127.0.0.1:8000/'

// 创建axios实例，请求超时时间为300秒
const instance = axios.create({
  timeout: 300000
})

// 请求和响应拦截可以根据实际项目需求进行编写
// 请求发起前拦截

instance.interceptors.request.use((config) => {
  // console.log(crypto.getlocalStorage('token'))
  // if(!crypto.getlocalStorage('token')){ }
  if (config.url !== 'api/user/login') {
    const token = crypto.getlocalStorage('token')
    config.headers.authorization = 'Bearer ' + token
  }

  // 这里可以对接口请求头进行操作 如：config.headers['X-Token'] = token
  // console.log('请求拦截', config)
  return config
}, (error) => {
  // Do something with request error
  // console.log('error', error)
  // TODO 异常跳转到 登录页面
  router.push({
    path: '/login',
    query: {
      redirect: location.hostname
    }
  })
  return Promise.reject(error)
})

// 响应拦截（请求返回后拦截）
instance.interceptors.response.use(response => {
  // console.log('响应拦截', response)
  return response
}, error => {
  // TODO 异常跳转到登录页面
  router.push({
    path: '/login',
    query: {
      redirect: location.hostname
    }
  })
  // console.log('catch', error)

  return Promise.reject(error)
})

// 按照请求类型对axios进行封装
const api = {
  get (url, data) {
    return instance.get(url, {
      params: data
    })
  },
  post (url, data) {
    return instance.post(url, data)
  },
  del (url) {
    return instance.delete(url)
  }
}
export default api
