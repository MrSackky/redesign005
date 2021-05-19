import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Imageslide: () => import('../..\\components\\Imageslide.vue' /* webpackChunkName: "components/imageslide" */).then(c => wrapFunctional(c.default || c)),
  Imglink: () => import('../..\\components\\Imglink.vue' /* webpackChunkName: "components/imglink" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  NewEven: () => import('../..\\components\\NewEven.vue' /* webpackChunkName: "components/new-even" */).then(c => wrapFunctional(c.default || c)),
  NewsRelease: () => import('../..\\components\\NewsRelease.vue' /* webpackChunkName: "components/news-release" */).then(c => wrapFunctional(c.default || c)),
  PicBorad: () => import('../..\\components\\PicBorad.vue' /* webpackChunkName: "components/pic-borad" */).then(c => wrapFunctional(c.default || c)),
  PurchaseNews: () => import('../..\\components\\PurchaseNews.vue' /* webpackChunkName: "components/purchase-news" */).then(c => wrapFunctional(c.default || c)),
  VuetifyLogo: () => import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
