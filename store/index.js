// 服务端引入, 刷新时查看有没有登录态, 会调用nextServeInit, 修改store中user
const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
  return {
    user: null
  }
}

export const mutations = {
  setUser(state, data){
    state.user = data
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    let user = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {
        // No valid cookie found
      }
    }
    // 刷新时,服务端触发,来保持登录状态
    commit('setUser', user)
  }
}
