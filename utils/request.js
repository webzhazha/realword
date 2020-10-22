import axios from 'axios'
// 封装请求方法

// const request = axios.create({
//   baseUrl: 'https://conduit.productionready.io'
// })
axios.defaults.baseURL = 'https://conduit.productionready.io'
// 
export const get = (url,data)=>{
  return axios.get(url,data)
}
export const post = (url,data)=>{
    return axios.post(url,data)
}