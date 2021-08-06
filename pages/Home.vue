<template>
  <div id="home">
     <LazyHydrate when-idle>
      <SfHero class="hero">
        <SfHeroItem
          v-for="(hero, i) in content[0].slide_banner_top"
          :key="i"
          :title="hero.title"
          :subtitle="hero.subtitle"
          :button-text="hero.buttontext"
          :background="hero.background"
          :image="hero.image.url"
          :class="hero.className"
        />
      </SfHero>
    </LazyHydrate>
    <!-- {{content[0].top_banner_image}} -->

    <LazyHydrate when-visible>
        <div>
        <SfHeading title="Popular Categories" :level="3"/>

        <div class="category-card sf-section__content desktop-only">
             <SfCategoryCard class="card"
             v-for="(card, i) in content[0].cards"
             :key="i"
             :label="card.label"
             :count="card.count"
             :background='card.background.url'
             :link="card.link"

    />
        </div>
        <div class="category-card-mobile sf-section__content smartphone-only">
             <SfCategoryCard class="card"
             v-for="(card, i) in content[0].cards"
             :key="i"
             :label="card.label"
             :count="card.count"
             :background='card.background'
             :link="card.link"
    />
        </div>
        </div>
    </LazyHydrate>

     <LazyHydrate when-visible>
      <SfBannerGrid :bannerGrid="1" class="banner-grid">
        <template v-for="item in content[0].top_banner_image" v-slot:[item.slot]>
          <SfBanner
            :key="item.slot"
            :title="item.title"
            :subtitle="item.subtitle"
            :description="item.description"
            :button-text="item.buttontext"
            :image="item.image.url"
            :class="item.class"
          />
        </template>
      </SfBannerGrid>
    </LazyHydrate>

    <!-- {{content[0].products}} -->

     <LazyHydrate when-visible>
      <div class="similar-products">
        <SfHeading title="Match with it" :level="3"/>
        <nuxt-link :to="localePath('/c/women')" class="smartphone-only">See all</nuxt-link>
      </div>
    </LazyHydrate>

     <LazyHydrate when-visible>
        <SfCarousel class="carousel" :settings="{ peek: 16, breakpoints: { 1023: { peek: 0, perView: 2 } } }">
          <template #prev="{go}">
            <SfArrow
              aria-label="prev"
              class="sf-arrow--left sf-arrow--long color-primary"
              @click="go('prev')"
            />
          </template>
          <template #next="{go}">
            <SfArrow
              aria-label="next"
              class="sf-arrow--right sf-arrow--long color-primary"
              @click="go('next')"
            />
          </template>
          <!-- "product.rating.max" -->
          <!-- "product.rating.score" -->
            <SfCarouselItem class="carousel__item" v-for="(product, i) in content[0].products" :key="i">
            <SfProductCard
              :title="product.title"
              :image="product.image.url"
              :regular-price="product.price"
              :max-rating="parseInt(product.rating.max)"
              :score-rating="parseInt(product.rating.score)"
              :show-add-to-cart-button="true"
              :is-on-wishlist="product.isInWishlist"
              link="/"
              class="carousel__item__product"
              @click:wishlist="toggleWishlist(i)"
            />
          </SfCarouselItem>
        </SfCarousel>
    </LazyHydrate>
    <!-- {{content[0].products}} -->

    <LazyHydrate when-visible>
      <SfCallToAction
        :title="content[0].banner.title"
        :button-text="content[0].banner.buttontext"
        :description="content[0].banner.description"
        :image="content[0].banner.image.url"
        :class="content[0].banner.class"
      />
    </LazyHydrate>
    <!-- {{content[0].banner.title}} -->

      <LazyHydrate when-visible>
      <ShareFeed/>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <HomeMobileBanner/>
    </LazyHydrate>
  </div>
</template>
<script>
import {
  SfHero,
  SfBanner,
  SfCategoryCard,
  SfCallToAction,
  SfSection,
  SfCarousel,
  SfProductCard,
  SfImage,
  SfBannerGrid,
  SfHeading,
  SfArrow,
  SfButton
} from '@storefront-ui/vue';
import InstagramFeed from '~/components/InstagramFeed.vue';
import ShareFeed from '~/components/ShareFeed.vue';
import MobileStoreBanner from '~/components/MobileStoreBanner.vue';
import HomeMobileBanner from '~/components/HomeMobileBanner.vue';
import LazyHydrate from 'vue-lazy-hydration';
import { useContent } from '@vsf-enterprise/contentstack';
import { onSSR } from '@vue-storefront/core';

export default {
  name: 'Home',
   mounted () {
    window.analytics.page('Home')
  },
  components: {
    InstagramFeed,
    ShareFeed,
    SfCategoryCard,
    SfHero,
    SfBanner,
    SfCallToAction,
    SfSection,
    SfCarousel,
    SfProductCard,
    SfImage,
    SfBannerGrid,
    SfHeading,
    SfArrow,
    SfButton,
    MobileStoreBanner,
    LazyHydrate,
    HomeMobileBanner
  },
setup(props, context) {
      const type = 'home_static_content'
      const{ search, content } = useContent(type);
      onSSR(async () => {
        await search({
             id: 'bltb36154367dbe2b86',
            type: 'home_static_content'
            });
      });
      return {
        content
      }
    },
  methods: {
    toggleWishlist(index) {
      this.products[index].isInWishlist = !this.products[index].isInWishlist;
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
  box-sizing: border-box;
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    max-width: 1240px;
    padding: 0;
    margin: 0 auto;
  }
}

.hero {
  margin: var(--spacer-xl) auto var(--spacer-lg);
  --hero-item-background-position: center;
  ::v-deep .sf-link:hover {
    color: var(--c-white);
  }
  @include for-desktop {
    // margin: var(--spacer-xl) auto var(--spacer-2xl);
    margin: var(--spacer-2xs) auto var(--spacer-lg);
  }
  .sf-hero-item {
    &:nth-child(even) {
      --hero-item-background-position: left;
      @include for-mobile {
        --hero-item-background-position: 30%;
       ::v-deep .sf-hero-item__wrapper {
         &.sf-button {
            align-items: flex-end;
            text-align: right;
            padding: var(--spacer-sm) var(--spacer-sm) var(--spacer-sm) var(--spacer-2xl);
         }
        }
        ::v-deep .sf-hero-item__subtitle,
        ::v-deep .sf-hero-item__title {
          width: 100%;
        }
      }
    }
  }
  ::v-deep .sf-hero__control {
    &--right, &--left {
      display: none;
    }
  }
}

.banner-grid {
  --banner-container-width: 50%;
  margin: var(--spacer-xl) 0;
  ::v-deep .sf-link:hover {
    color: var(--c-white);
  }
  @include for-desktop {
    margin: var(--spacer-2xl) 0;
    ::v-deep .sf-link {
      --button-width: auto;
    }
  }
}

.banner {
  &__tshirt {
    background-position: left;
  }
  &-central {
    @include for-desktop {
      --banner-container-flex: 0 0 70%;
    }
  }
}

.similar-products {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--spacer-2xs);
  --heading-padding: 0;
  border-bottom: 1px var(--c-light) solid;
  @include for-desktop {
    border-bottom: 0;
    justify-content: center;
    padding-bottom: 0;
  }
}

.call-to-action {
  background-position: right;
  margin: var(--spacer-xs) 0;
  @include for-desktop {
    margin: var(--spacer-xl) 0 var(--spacer-2xl) 0;
  }
}

.carousel {
    margin: 0 calc(var(--spacer-sm) * -1) 0 0;
  @include for-desktop {
    margin: 0;
  }
  &__item {
    margin: 1.375rem 0 2.5rem 0;
    @include for-desktop {
      margin: var(--spacer-xl) 0 var(--spacer-xl) 0;
    }
    &__product {
      --product-card-add-button-transform: translate3d(0, 30%, 0);
    }
  }
  ::v-deep .sf-arrow--long .sf-arrow--right {
    --arrow-icon-transform: rotate(180deg);
     -webkit-transform-origin: center;
     transform-origin: center;
  }
}

.category-card {
    display: flex;
    justify-content: space-between;
}

.category-card-mobile{
    display: flex;
    width: 980px;
    justify-content: space-around;
}

.sf-icon.color-primary {
    --icon-color: white;
}
</style>
