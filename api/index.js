import { get, post } from '@/utils/request.js'

// 登录接口
const login = (data)=>{
  return post('/api/users/login',data)
}

// 注册接口
const register = (data)=>{
  return post('/api/users',data)
}

export default {
  login,
  register
}