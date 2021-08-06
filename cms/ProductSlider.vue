<template>
  <SfCarousel v-if="!loading" class="product-carousel">
    <SfCarouselItem v-for="(product, i) in products" :key="i">
      <SfProductCard
        data-cy="home-url_product"
        :title="productGetters.getName(product)"
        :image="product.images[0].url"
        :regular-price="$n(productGetters.getFormattedPrice(productGetters.getPrice(product).regular), 'currency')"
        :special-price="$n(productGetters.getFormattedPrice(productGetters.getPrice(product).special), 'currency')"
        :max-rating="5"
        :score-rating="3.5"
        :show-add-to-cart-button="true"
        :is-on-wishlist="product.isOnWishlist"
        :link="`/product?id=${product._id}`"
        class="product-card"
      />
    </SfCarouselItem>
  </SfCarousel>
</template>

<script lang="ts">
import Vue from 'vue'
import { SfCarousel, SfProductCard } from '@storefront-ui/vue'
import { useProduct, productGetters } from '@vue-storefront/commercetools'
import { ref, onMounted } from '@vue/composition-api'

export default Vue.extend({
  name: 'ProductSlider',
  components: {
    SfCarousel,
    SfProductCard,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const { items }: { items: { id: string }[] } = props as any
    const products = ref([])
    const loading = ref(true)
    async function getProducts() {
      await Promise.all(
        items.map(async ({ id }) => {
          const { search, products: fetchedProducts } = useProduct(
            `${id}-${(Date.now() + Math.random()).toString().replace('.', '')}`,
          )
          await search({ id })
          products.value.push(fetchedProducts.value[0])
        }),
      )
      loading.value = false
    }
    onMounted(async () => await getProducts())
    return {
      products,
      loading,
      productGetters,
    }
  },
})
</script>
