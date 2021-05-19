import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a372d174 = () => interopDefault(import('..\\pages\\archives.vue' /* webpackChunkName: "pages/archives" */))
const _134b443e = () => interopDefault(import('..\\pages\\complain.vue' /* webpackChunkName: "pages/complain" */))
const _768d9ddb = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _18a50964 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _60ef9798 = () => interopDefault(import('..\\pages\\menu.vue' /* webpackChunkName: "pages/menu" */))
const _0def37a3 = () => interopDefault(import('..\\pages\\qrcode.vue' /* webpackChunkName: "pages/qrcode" */))
const _73900f54 = () => interopDefault(import('..\\pages\\reviews.vue' /* webpackChunkName: "pages/reviews" */))
const _4efd664d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _a372d174,
    name: "archives"
  }, {
    path: "/complain",
    component: _134b443e,
    name: "complain"
  }, {
    path: "/contact",
    component: _768d9ddb,
    name: "contact"
  }, {
    path: "/login",
    component: _18a50964,
    name: "login"
  }, {
    path: "/menu",
    component: _60ef9798,
    name: "menu"
  }, {
    path: "/qrcode",
    component: _0def37a3,
    name: "qrcode"
  }, {
    path: "/reviews",
    component: _73900f54,
    name: "reviews"
  }, {
    path: "/",
    component: _4efd664d,
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
