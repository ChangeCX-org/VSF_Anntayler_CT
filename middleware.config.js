const { basicProfile, fullProfile } = require('./queries/get-me')

module.exports = {
    integrations: {
        ct: {
            location: '@vue-storefront/commercetools-api/server',
            extensions: existing => existing.concat('@vsf-enterprise/commercetools/extensions'),
            configuration: {
                api: {
                    uri: 'https://api.us-central1.gcp.commercetools.com/ct_anntayler/graphql',
                    authHost: 'https://auth.us-central1.gcp.commercetools.com',
                    projectKey: 'ct_anntayler',
                    clientId: 'YtmwIt9IgllmuOt_zWdn71-s',
                    clientSecret: '5316FoSGkRziRm0HxmkQ2ZfaEmUTEHik',
                    scopes: [
                        'manage_project:ct_anntayler'
                    ]
                },
                currency: 'USD',
                country: 'US',
            },
            customQueries: {
                'get-me-basic': ({ variables }) => ({ query: basicProfile, variables }),
                'get-me-full': ({ variables }) => ({ query: fullProfile, variables })
            },
        },
        ctf: {
            location: '@vsf-enterprise/ct-faceting/server',
            configuration: {
                api: {
                    authHost: 'https://auth.us-central1.gcp.commercetools.com',
                    projectKey: 'ct_anntayler',
                    clientId: 'YtmwIt9IgllmuOt_zWdn71-s',
                    clientSecret: '5316FoSGkRziRm0HxmkQ2ZfaEmUTEHik',
                    scopes: [
                        'manage_project:ct_anntayler'
                    ]
                },
                faceting: {
                    host: 'https://api.us-central1.gcp.commercetools.com/'
                },
            }
        },
        cnts: {
            location: '@vsf-enterprise/contentstack/server',
            configuration: {
                key: 'bltcefcb29e8daeb161',
                token: 'cs8f1f9e836a8d7e228d5d387d',
                env: 'development'
                    // region: 'US', // (set 'EU' for European data center, remove for US)
            },
        },
        adyen: {
            location: '@vsf-enterprise/adyen/server',
            configuration: {
                ctApi: {
                    apiHost: 'https://api.us-central1.gcp.commercetools.com',
                    authHost: 'https://auth.us-central1.gcp.commercetools.com',
                    projectKey: 'ct_anntayler',
                    clientId: 'YtmwIt9IgllmuOt_zWdn71-s',
                    clientSecret: '5316FoSGkRziRm0HxmkQ2ZfaEmUTEHik',
                    scopes: [
                        'manage_project:ct_anntayler'
                    ]
                },
                adyenMerchantAccount: 'ChangeCX_VSFECOM_TEST',
                origin: 'https://change-cx-dev.us-west1.gcp.storefrontcloud.io',
                buildRedirectUrlAfterAuth(paymentAndOrder, succeed) {
                    let redirectUrl = `/checkout/thank-you?order=${paymentAndOrder.order.id}`;
                    if (!succeed) {
                        redirectUrl += '&error=authorization-failed';
                    }
                    return redirectUrl;
                },
                buildRedirectUrlAfterError(err) {
                    return '/?server-error';
                }
            }
        },
    }
};