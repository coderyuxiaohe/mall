import axios from 'axios'

export function request(config){
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000'
  })

  // 相应拦截
  instance.interceptors.response.use(res => {
    // console.log(res)
    return res.data;
  }, err => {
    console.log('请求失败')
  })

  return instance(config)
}