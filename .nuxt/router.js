import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a1066f84 = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "pages/Category" */))
const _258c0284 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "" */))
const _4b064cfa = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "" */))
const _792c2b8e = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "" */))
const _964ee554 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "" */))
const _c3334e06 = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "" */))
const _257816f4 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "pages/Checkout" */))
const _3b3995c5 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "pages/Checkout/Billing" */))
const _4c2e3060 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "pages/Checkout/Payment" */))
const _6bb35954 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "pages/Checkout/Shipping" */))
const _554124fb = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "pages/Checkout/ThankYou" */))
const _212a0ec6 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "" */))
const _116fd5fe = () => interopDefault(import('..\\pages\\Help.vue' /* webpackChunkName: "pages/Help" */))
const _09603b9f = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _13563b5e = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _5478f3b8 = () => interopDefault(import('..\\pages\\MyAccount\\BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _7936c955 = () => interopDefault(import('..\\pages\\MyAccount\\LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _09803736 = () => interopDefault(import('..\\pages\\MyAccount\\MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _6ec4c508 = () => interopDefault(import('..\\pages\\MyAccount\\MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _10207eee = () => interopDefault(import('..\\pages\\MyAccount\\MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _36754ed2 = () => interopDefault(import('..\\pages\\MyAccount\\OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _2afe29da = () => interopDefault(import('..\\pages\\MyAccount\\ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _34a65942 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "pages/Product" */))
const _cad00c70 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _b584cad2 = () => interopDefault(import('..\\pages\\SearchProduct.vue' /* webpackChunkName: "pages/SearchProduct" */))
const _71e2d7da = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "" */))
const _214c0da1 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "" */))
const _30765388 = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "" */))
const _3a49eeca = () => interopDefault(import('..\\pages\\_id.vue' /* webpackChunkName: "pages/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _a1066f84,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _258c0284,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _4b064cfa,
      name: "billing___en"
    }, {
      path: "payment",
      component: _792c2b8e,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _964ee554,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _c3334e06,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _257816f4,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _3b3995c5,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _4c2e3060,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _6bb35954,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _554124fb,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/de",
    component: _212a0ec6,
    name: "home___de"
  }, {
    path: "/Help",
    component: _116fd5fe,
    name: "Help___en"
  }, {
    path: "/Home",
    component: _09603b9f,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _13563b5e,
    name: "MyAccount___en",
    children: [{
      path: "BillingDetails",
      component: _5478f3b8,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _7936c955,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _09803736,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _6ec4c508,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _10207eee,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _36754ed2,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _2afe29da,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _34a65942,
    name: "Product___en"
  }, {
    path: "/search",
    component: _cad00c70,
    name: "search___en"
  }, {
    path: "/SearchProduct",
    component: _b584cad2,
    name: "SearchProduct___en"
  }, {
    path: "/de/Category",
    component: _a1066f84,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _258c0284,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _4b064cfa,
      name: "billing___de"
    }, {
      path: "payment",
      component: _792c2b8e,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _964ee554,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _c3334e06,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _257816f4,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _3b3995c5,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _4c2e3060,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _6bb35954,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _554124fb,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/Help",
    component: _116fd5fe,
    name: "Help___de"
  }, {
    path: "/de/Home",
    component: _09603b9f,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _13563b5e,
    name: "MyAccount___de",
    children: [{
      path: "BillingDetails",
      component: _5478f3b8,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _7936c955,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _09803736,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _6ec4c508,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _10207eee,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _36754ed2,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _2afe29da,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _34a65942,
    name: "Product___de"
  }, {
    path: "/de/search",
    component: _cad00c70,
    name: "search___de"
  }, {
    path: "/de/SearchProduct",
    component: _b584cad2,
    name: "SearchProduct___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _71e2d7da,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _214c0da1,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _30765388,
    name: "category___de"
  }, {
    path: "/de/:id?",
    component: _3a49eeca,
    name: "id___de"
  }, {
    path: "/my-account/:pageName?",
    component: _71e2d7da,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _214c0da1,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _30765388,
    name: "category___en"
  }, {
    path: "/",
    component: _212a0ec6,
    name: "home___en"
  }, {
    path: "/:id?",
    component: _3a49eeca,
    name: "id___en"
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
