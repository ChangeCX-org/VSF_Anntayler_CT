import webpack from 'webpack';

export default {
    mode: 'universal',
    server: {
        port: 3000,
        host: '0.0.0.0'
    },
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossorigin: 'crossorigin'
            },
            {
                rel: 'preload',
                href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap',
                as: 'style'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap',
                media: 'print',
                onload: 'this.media=\'all\'',
                once: true
            }
        ],
        script: []
    },
    loading: { color: '#fff' },
    router: {
        middleware: ['checkout', 'segment'],
        scrollBehavior(_to, _from, savedPosition) {
            if (savedPosition) {
                return savedPosition;
            } else {
                return { x: 0, y: 0 };
            }
        }
    },
    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/style-resources',
        '@nuxtjs/pwa', ['@vue-storefront/nuxt-theme'],
        ['@vue-storefront/nuxt', {
            useRawSource: {
                dev: [
                    '@vue-storefront/core',
                    '@vsf-enterprise/contentstack',
                    '@vsf-enterprise/adyen'
                ],
                prod: [
                    '@vue-storefront/core',
                    '@vsf-enterprise/contentstack',
                    '@vsf-enterprise/adyen'
                ]
            }
        }],
        ['@vsf-enterprise/ct-faceting/nuxt', {
            apiConfigModule: '@vsf-enterprise/commercetools/nuxt'
        }],
        ['@vsf-enterprise/commercetools/nuxt', {
            i18n: {
                useNuxtI18nConfig: true
            }
        }],
        '@vsf-enterprise/contentstack/nuxt',
    ],
    modules: [
        'nuxt-i18n',
        'cookie-universal-nuxt',
        'vue-scrollto/nuxt',
        '@vue-storefront/middleware/nuxt', ['@vsf-enterprise/adyen/nuxt', {
          availablePaymentMethods: [
            'scheme',
            'paypal'
          ],
          clientKey: 'test_EIJP53PPUFBB3JQ6G2JBLJYBX4ZKG2PY',
          environment: 'test',
          methods: {
            paypal: {
              merchantId: '3QXQ7J54BAZ5A',
              intent: 'authorize'
            }
          }
        }]
    ],
    plugins: ['~/plugins/cms.client'],
    plugins: [{ src: '~/plugins/client-only.client.js', ssr: false }],
    serverMiddleware: ['~/plugins/cms.server'],
    i18n: {
        currency: 'USD',
        country: 'US',
        countries: [{
                name: 'US',
                label: 'United States',
                states: [
                    'California',
                    'Nevada'
                ]
            },
            { name: 'AT', label: 'Austria' },
            { name: 'DE', label: 'Germany' },
            { name: 'NL', label: 'Netherlands' }
        ],
        currencies: [
            { name: 'EUR', label: 'Euro' },
            { name: 'USD', label: 'Dollar' }
        ],
        locales: [
            { code: 'en', label: 'English', file: 'en.js', iso: 'en' },
            { code: 'de', label: 'German', file: 'de.js', iso: 'de' }
        ],
        defaultLocale: 'en',
        lazy: true,
        seo: true,
        langDir: 'lang/',
        vueI18n: {
            fallbackLocale: 'en',
            numberFormats: {
                en: {
                    currency: {
                        style: 'currency',
                        currency: 'USD',
                        currencyDisplay: 'symbol'
                    }
                },
                de: {
                    currency: {
                        style: 'currency',
                        currency: 'USD',
                        currencyDisplay: 'symbol'
                    }
                }
            }
        },
        detectBrowserLanguage: {
            cookieKey: 'vsf-locale'
        }
    },
    styleResources: {
        scss: [require.resolve('@storefront-ui/shared/styles/_helpers.scss', { paths: [process.cwd()] })]
    },
    build: {
        extend(config, ctx) {
          // Extend only webpack config for client-bundle
          if (ctx.isClient) {
            config.devtool = 'inline-source-map'
          }
        },
        transpile: [
            'vee-validate/dist/rules'
        ],
        plugins: [
            new webpack.DefinePlugin({
                'process.VERSION': JSON.stringify({
                    // eslint-disable-next-line global-require
                    version: require('./package.json').version,
                    lastCommit: process.env.LAST_COMMIT || ''
                })
            })
        ]
    }
};
