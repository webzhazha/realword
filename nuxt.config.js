export default {
  router: {
    linkActiveClass: 'active', // 当当前路由为nuxt-link to时,点亮
    extendRoutes(routes, resolve){
      
      // 清除默认的路由规则
      routes.splice(0)
      // 配置自定义路由
      routes.push({
        name: 'index',
        path: '/',
        component: resolve(__dirname, 'pages/layout/'),
        children: [
          {
            path: '',
            name: 'home',
            component: resolve(__dirname, 'pages/home')
          },
          {
            path: 'login',
            name: 'login',
            component: resolve(__dirname, 'pages/login')
          },
          {
            path: 'register',
            name: 'register',
            component: resolve(__dirname, 'pages/login')
          },
          {
            path: 'profile/:username',
            name: 'profile',
            component: resolve(__dirname, 'pages/profile')
          },
          {
            path: 'settings',
            name: 'settings',
            component: resolve(__dirname, 'pages/settings')
          },
          {
            path: 'editor',
            name: 'editor',
            component: resolve(__dirname, 'pages/editor')
          },
          {
            path: 'article/:slug',
            name: 'article',
            component: resolve(__dirname, 'pages/article')
          }
        ]
      })
    }
  }
}