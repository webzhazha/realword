<template>
  <div>
    <!-- 上部 -->
         <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <!-- <a class="nav-link active" href="">Home</a> -->
            <nuxt-link class="nav-link" to="/" exact>Home</nuxt-link >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/editor">
              <i class="ion-compose"></i>&nbsp;New Post
            </nuxt-link>
          </li>
          <template v-if="user">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/settings">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/profile/1234">
                <img class="user-pic" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2480604110,4008147240&fm=26&gp=0.jpg" alt="">
                {{user.username}}
              </nuxt-link>
            </li>
          </template>
          <template v-if="!user">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/login">登录</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/register">注册</nuxt-link>
            </li>
          </template>
          
        </ul>
      </div>
    </nav>
    <!-- 中部 -->
    <nuxt/>
    <!-- 下部 -->
     <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState(['user'])
    },
  }
</script>

<style lang="scss" scoped>

</style>