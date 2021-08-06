var Analytics = require('analytics-node');
var analytics = new Analytics('BANiq8UOsSFz0coJglJfNfFjcWGWZ7dT');

export default async({ app, $vsf }) => {
    const customQuery = { getBasicProfile: 'get-me-basic' }
    const { data } = await $vsf.$ct.api.getMe({}, customQuery);

    const ProductPath = app.context.route.fullPath.split('/p/')[1];
    const CategoryPath = app.context.route.fullPath.split('/c/')[1];
    if (!data || !data.me.activeCart) return;
    if (CategoryPath) {
        // analytics.track({
        //     userId: data.me.activeCart.customerId || data.me.activeCart.anonymousId,
        //     event: 'Product List Viewed',
        //     properties: {
        //         category_path: CategoryPath,
        //         customer_id: data.me.activeCart.customerId || data.me.activeCart.anonymousId
        //     }
        // });
        return;
    }
    if (ProductPath) {
        // analytics.track({
        //     userId: data.me.activeCart.customerId || data.me.activeCart.anonymousId,
        //     event: 'Products Searched',
        //     properties: {
        //         customer_id: data.me.activeCart.customerId || data.me.activeCart.anonymousId,
        //         product_path: ProductPath,
        //         product: null,

        //     }
        // });
        return;
    }

}