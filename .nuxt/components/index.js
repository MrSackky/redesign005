import { wrapFunctional } from './utils'

export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Imageslide } from '../..\\components\\Imageslide.vue'
export { default as Imglink } from '../..\\components\\Imglink.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as NewEven } from '../..\\components\\NewEven.vue'
export { default as NewsRelease } from '../..\\components\\NewsRelease.vue'
export { default as PicBorad } from '../..\\components\\PicBorad.vue'
export { default as PurchaseNews } from '../..\\components\\PurchaseNews.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'

export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyImageslide = import('../..\\components\\Imageslide.vue' /* webpackChunkName: "components/imageslide" */).then(c => wrapFunctional(c.default || c))
export const LazyImglink = import('../..\\components\\Imglink.vue' /* webpackChunkName: "components/imglink" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyNewEven = import('../..\\components\\NewEven.vue' /* webpackChunkName: "components/new-even" */).then(c => wrapFunctional(c.default || c))
export const LazyNewsRelease = import('../..\\components\\NewsRelease.vue' /* webpackChunkName: "components/news-release" */).then(c => wrapFunctional(c.default || c))
export const LazyPicBorad = import('../..\\components\\PicBorad.vue' /* webpackChunkName: "components/pic-borad" */).then(c => wrapFunctional(c.default || c))
export const LazyPurchaseNews = import('../..\\components\\PurchaseNews.vue' /* webpackChunkName: "components/purchase-news" */).then(c => wrapFunctional(c.default || c))
export const LazyVuetifyLogo = import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
