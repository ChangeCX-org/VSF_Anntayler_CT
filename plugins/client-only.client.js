export default async({ app, $vsf }) => {
    const customQuery = { getFullProfile: 'fullProfile' }
    const { data } = await $vsf.$ct.api.getMe({}, customQuery);

    var analytics = window.analytics = window.analytics || [];
    if (!analytics.initialize)
        if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice.");
        else {
            analytics.invoked = !0;
            analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "addSourceMiddleware", "addIntegrationMiddleware", "setAnonymousId", "addDestinationMiddleware"];
            analytics.factory = function(e) {
                return function() {
                    var t = Array.prototype.slice.call(arguments);
                    t.unshift(e);
                    analytics.push(t);
                    return analytics
                }
            };
            for (var e = 0; e < analytics.methods.length; e++) {
                var key = analytics.methods[e];
                analytics[key] = analytics.factory(key)
            }
            analytics.load = function(key, e) {
                var t = document.createElement("script");
                t.type = "text/javascript";
                t.async = !0;
                t.src = "https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";
                var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(t, n);
                analytics._loadOptions = e
            };
            analytics._writeKey = "BANiq8UOsSFz0coJglJfNfFjcWGWZ7dT";
            analytics.SNIPPET_VERSION = "4.13.2";
            analytics.load("BANiq8UOsSFz0coJglJfNfFjcWGWZ7dT");

            //console.log(data.me);
            // if (!data || !data.me.activeCart)
            //     analytics.identify(data.me.activeCart.customerId, {});
            // else
            //     analytics.identify(data.me.activeCart.anonymousId, {});

            // analytics.page();
        }
}