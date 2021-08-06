import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_nuxtplugin2fff1ee3_5e3afaf8 from 'nuxt_plugin_nuxtplugin2fff1ee3_5e3afaf8' // Source: .\\nuxt.plugin.2fff1ee3.js (mode: 'all')
import nuxt_plugin_vuescrollto_0f49ef62 from 'nuxt_plugin_vuescrollto_0f49ef62' // Source: .\\vue-scrollto.js (mode: 'client')
import nuxt_plugin_cookieuniversalnuxt_480e67bc from 'nuxt_plugin_cookieuniversalnuxt_480e67bc' // Source: .\\cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_pluginseo_1c88fcf0 from 'nuxt_plugin_pluginseo_1c88fcf0' // Source: .\\nuxt-i18n\\plugin.seo.js (mode: 'all')
import nuxt_plugin_pluginrouting_7861e17f from 'nuxt_plugin_pluginrouting_7861e17f' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_01439250 from 'nuxt_plugin_pluginmain_01439250' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_nuxtplugin9dd15e86_a23c0770 from 'nuxt_plugin_nuxtplugin9dd15e86_a23c0770' // Source: .\\nuxt.plugin.9dd15e86.js (mode: 'all')
import nuxt_plugin_nuxtplugin2a43fbd8_3fdbe0a0 from 'nuxt_plugin_nuxtplugin2a43fbd8_3fdbe0a0' // Source: .\\nuxt.plugin.2a43fbd8.js (mode: 'all')
import nuxt_plugin_nuxtplugin150e24db_3a4714f5 from 'nuxt_plugin_nuxtplugin150e24db_3a4714f5' // Source: .\\nuxt.plugin.150e24db.js (mode: 'all')
import nuxt_plugin_plugin_2d6673b4 from 'nuxt_plugin_plugin_2d6673b4' // Source: .\\composition-api\\plugin.js (mode: 'all')
import nuxt_plugin_pluginse2etesting689c8ef7_47fb03f3 from 'nuxt_plugin_pluginse2etesting689c8ef7_47fb03f3' // Source: .\\plugins.e2e-testing.689c8ef7.js (mode: 'all')
import nuxt_plugin_pluginsloggeredb2a868_5ed9a290 from 'nuxt_plugin_pluginsloggeredb2a868_5ed9a290' // Source: .\\plugins.logger.edb2a868.js (mode: 'all')
import nuxt_plugin_pluginsssr2348db60_682b29d2 from 'nuxt_plugin_pluginsssr2348db60_682b29d2' // Source: .\\plugins.ssr.2348db60.js (mode: 'all')
import nuxt_plugin_pluginscontexte732e5ba_3137b1de from 'nuxt_plugin_pluginscontexte732e5ba_3137b1de' // Source: .\\plugins.context.e732e5ba.js (mode: 'all')
import nuxt_plugin_workbox_9574c1d4 from 'nuxt_plugin_workbox_9574c1d4' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_6c031d96 from 'nuxt_plugin_metaplugin_6c031d96' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_clientonlyclient_d2d3e1d4 from 'nuxt_plugin_clientonlyclient_d2d3e1d4' // Source: ..\\plugins\\client-only.client.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"changecx-retail","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"\u003E My breathtaking Nuxt.js project"},{"name":"generator","content":"Vue Storefront 2"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"preconnect","href":"https:\u002F\u002Ffonts.gstatic.com","crossorigin":"crossorigin"},{"rel":"preload","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap","as":"style"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap","media":"print","onload":"this.media='all'","once":true}],"script":[],"style":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_nuxtplugin2fff1ee3_5e3afaf8 === 'function') {
    await nuxt_plugin_nuxtplugin2fff1ee3_5e3afaf8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollto_0f49ef62 === 'function') {
    await nuxt_plugin_vuescrollto_0f49ef62(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_480e67bc === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_480e67bc(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginseo_1c88fcf0 === 'function') {
    await nuxt_plugin_pluginseo_1c88fcf0(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_7861e17f === 'function') {
    await nuxt_plugin_pluginrouting_7861e17f(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_01439250 === 'function') {
    await nuxt_plugin_pluginmain_01439250(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtplugin9dd15e86_a23c0770 === 'function') {
    await nuxt_plugin_nuxtplugin9dd15e86_a23c0770(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtplugin2a43fbd8_3fdbe0a0 === 'function') {
    await nuxt_plugin_nuxtplugin2a43fbd8_3fdbe0a0(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtplugin150e24db_3a4714f5 === 'function') {
    await nuxt_plugin_nuxtplugin150e24db_3a4714f5(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_2d6673b4 === 'function') {
    await nuxt_plugin_plugin_2d6673b4(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginse2etesting689c8ef7_47fb03f3 === 'function') {
    await nuxt_plugin_pluginse2etesting689c8ef7_47fb03f3(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsloggeredb2a868_5ed9a290 === 'function') {
    await nuxt_plugin_pluginsloggeredb2a868_5ed9a290(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsssr2348db60_682b29d2 === 'function') {
    await nuxt_plugin_pluginsssr2348db60_682b29d2(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginscontexte732e5ba_3137b1de === 'function') {
    await nuxt_plugin_pluginscontexte732e5ba_3137b1de(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_9574c1d4 === 'function') {
    await nuxt_plugin_workbox_9574c1d4(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_6c031d96 === 'function') {
    await nuxt_plugin_metaplugin_6c031d96(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_clientonlyclient_d2d3e1d4 === 'function') {
    await nuxt_plugin_clientonlyclient_d2d3e1d4(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
