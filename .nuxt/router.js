import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d731882 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _43db8eb4 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _37ce9034 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _579223b4 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _2bf26378 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _9510cbfc = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _3e5c6701 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _7d731882,
    name: "index",
    children: [{
      path: "",
      component: _43db8eb4,
      name: "home"
    }, {
      path: "login",
      component: _37ce9034,
      name: "login"
    }, {
      path: "register",
      component: _37ce9034,
      name: "register"
    }, {
      path: "profile/:username",
      component: _579223b4,
      name: "profile"
    }, {
      path: "settings",
      component: _2bf26378,
      name: "settings"
    }, {
      path: "editor",
      component: _9510cbfc,
      name: "editor"
    }, {
      path: "article/:slug",
      component: _3e5c6701,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
