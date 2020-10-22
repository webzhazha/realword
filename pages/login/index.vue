<template>
  <div>
<div class="auth-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">{{isLogin?'登录':'注册'}}</h1>
        <p class="text-xs-center" v-if="isLogin">
          <nuxt-link to="/register">Have an account?</nuxt-link>
        </p>

        <ul class="error-messages">
          <template v-for="(message,field) in errors">
            <li v-for="(item,index) in message" :key="index">{{field}} {{item}}</li>
          </template>
          
        </ul>

        <form @submit.prevent="submits">
          <fieldset class="form-group" v-if="!isLogin">
            <input class="form-control form-control-lg" type="text" placeholder="Your Name" v-model="user.usename" required>
          </fieldset>
          <fieldset class="form-group" >
            <input class="form-control form-control-lg" type="text" placeholder="Email" v-model="user.email" required>
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="user.password" required>
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right">
            {{isLogin?'登录':'注册'}}
          </button>
        </form>
      </div>

    </div>
  </div>
</div>
  </div>
</template>

<script>
// 客户端引入, 登录成功后存储cookie
const Cookie = process.client ? require('js-cookie') : undefined
import axios from 'axios'
import api from '@/api/'
  export default {
    // 如果已登录, 进入该页面跳转首页
    middleware: 'notAuthenticated',
    data(){
      return {
        user: {
          usename: '',
          email: 'jkjkjk@163.com',
          password: 'liuhaitao123456'
        },
        errors: {}
      }
    },
    computed: {
      isLogin(){
        return this.$route.name === 'login'
      }
    },
    methods: {
      async submits(){
        // 判断是登录还是注册
        if(this.isLogin){
          api.login({
            user: this.user
          }).then(res=>{
            console.log(res);
            // 设置登录状态
            // 登录成功后 会返回token及个人信息
            // 保存在store中, 储存个人信息
            this.$store.commit('setUser', res.data.user)
            // 将token保存在浏览器cookie中, 以便后期服务器读取验证
            Cookie.set('user', res.data.user)
            this.$router.push('/')
          }).catch(err=>{
            this.errors = err.response.data.errors
          })
        }else{
          api.register({
            user: this.user
          }).then(res=>{
            this.$store.commit('setUser', res.data.user)
            Cookie.set('user', res.data.user)
            this.$router.push('/')
          }).catch(err=>{
            this.errors = err.response.data.errors
          })
        }
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>