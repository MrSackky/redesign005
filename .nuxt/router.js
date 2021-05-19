import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b5068f5c = () => interopDefault(import('..\\pages\\archives.vue' /* webpackChunkName: "pages/archives" */))
const _0a81654a = () => interopDefault(import('..\\pages\\complain.vue' /* webpackChunkName: "pages/complain" */))
const _f26da962 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _7ce53850 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _a89e8980 = () => interopDefault(import('..\\pages\\menu.vue' /* webpackChunkName: "pages/menu" */))
const _fbdba8a2 = () => interopDefault(import('..\\pages\\qrcode.vue' /* webpackChunkName: "pages/qrcode" */))
const _5318f46c = () => interopDefault(import('..\\pages\\reviews.vue' /* webpackChunkName: "pages/reviews" */))
const _10347e7e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/archives",
    component: _b5068f5c,
    name: "archives"
  }, {
    path: "/complain",
    component: _0a81654a,
    name: "complain"
  }, {
    path: "/contact",
    component: _f26da962,
    name: "contact"
  }, {
    path: "/login",
    component: _7ce53850,
    name: "login"
  }, {
    path: "/menu",
    component: _a89e8980,
    name: "menu"
  }, {
    path: "/qrcode",
    component: _fbdba8a2,
    name: "qrcode"
  }, {
    path: "/reviews",
    component: _5318f46c,
    name: "reviews"
  }, {
    path: "/",
    component: _10347e7e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
