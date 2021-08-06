<template>
  <div>
    <LazyHydrate when-visible>
      <TopBar class="desktop-only" />
    </LazyHydrate>
    <LazyHydrate when-idle>
      <AppHeader />
    </LazyHydrate>
    <div id="layout">
      <nuxt :key="$route.fullPath"/>
      <LazyHydrate when-visible>
        <BottomNavigation />
      </LazyHydrate>
      <CartSidebar />
      <WishlistSidebar />
      <LoginModal />
      <Notification />
    </div>
    <LazyHydrate when-visible>
      <AppFooter />
    </LazyHydrate>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue';
import BottomNavigation from '~/components/BottomNavigation.vue';
import AppFooter from '~/components/AppFooter.vue';
import TopBar from '~/components/TopBar.vue';
import CartSidebar from '~/components/CartSidebar.vue';
import WishlistSidebar from '~/components/WishlistSidebar.vue';
import LoginModal from '~/components/LoginModal.vue';
import LazyHydrate from 'vue-lazy-hydration';
import Notification from '~/components/Notification';
import '~/static/css/style.scss';

export default {
  name: 'DefaultLayout',

  components: {
    LazyHydrate,
    TopBar,
    AppHeader,
    BottomNavigation,
    AppFooter,
    CartSidebar,
    WishlistSidebar,
    LoginModal,
    Notification
  }
};
</script>

<style lang="scss">
@import "~@storefront-ui/vue/styles";
//@import "~/node_modules/@storefront-ui/shared/styles/helpers/colors";

.sf-button.color-secondary {
  --button-background: var(--c-primary);
}

#layout {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin: auto;
  }
}

.no-scroll {
  overflow: hidden;
  height: 100vh;
}

// Reset CSS
html {
  width: auto;
  @include for-mobile {
    overflow-x: hidden;
  }
}
body {
  overflow-y: scroll !important;
  overflow-x: hidden;
  color: var(--c-text);
  font-size: var(--font-size--base);
  font-family: var(--font-family--primary);
  margin: 0;
  padding: 0;
  @include generate-color-variants(--_c-orange-primary, #FC5A52);
  @include generate-color-variants(--_c-orange-secondary, #f5938e);
  @include assign-color-variants(--c-primary, --_c-orange-primary);
  @include assign-color-variants(--c-primary-variant, --_c-orange-secondary);

  .sf-button.color-secondary {
      --button-background: var(--c-primary);
    }
  .sf-button.color-secondary:hover {
    --button-background: var(--c-primary) radial-gradient(circle, transparent 1%, var(--c-primary-variant) 1%) center/15000%;
    }

    .sf-product-card {    
      &__wishlist-icon {
        --icon-color: var(--c-primary-variant);
      }
    }

    @media (min-width: 1024px) {
    .sf-banner {
      min-height: var(--banner-height, 20rem);
      width: 20rem;
    }
    .sf-mega-menu {
      &__content {
        margin: var(--mega-menu-content-margin, 0rem 1rem 0rem 19rem);
      }
    }
  }
.adyen-checkout{
    &__payment-method__radio--selected {
        background-color: var(--c-primary-variant);
    }
    &__payment-method__radio--selected:hover {
      box-shadow: 0 0 0 2px #e2af9f;
    }
    &__input:active,&__input--focus,&__input:active:hover,
    &__input:focus:hover,&__input--focus:hover {
       border: 1px solid var(--c-primary-variant);
       box-shadow: 0 0 0 2px #ffd7ca;
        }
    &__button {
       background: var(--c-primary);  
    }
    &__button:hover:focus {
    box-shadow: 0 0 0 2px #eaac99, 0 3px 4px #f7987b;;
    }
    &__button:focus {
    box-shadow: 0 0 0 2px #ffb39b;
    outline: 0;
    }
    &__button:active {
    background: var(--c-primary);
    }
    &__button:hover {
    background: #fb4b43;;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    } 
    &__spinner {
            border: 3px solid var(--c-primary-variant);
            animation: rotateSpinner 1.5s linear infinite;
            border-radius: 50%;
            border-top-color: transparent;
    }  
}   
.adyen-checkout__label--focused .adyen-checkout__label__text{
       color:var(--c-primary);
        }             

  
}
a {
  text-decoration: none;
  color: var(--c-link);
  &:hover {
    color: var(--c-link-hover);
  }
}
h1 {
  font-family: var(--font-family--secondary);
  font-size: var(--h1-font-size);
  line-height: 1.6;
  margin: 0;
}
h2 {
  font-family: var(--font-family--secondary);
  font-size: var(--h2-font-size);
  line-height: 1.6;
  margin: 0;
}
h3 {
  font-family: var(--font-family--secondary);
  font-size: var(--h3-font-size);
  line-height: 1.6;
  margin: 0;
}
h4 {
  font-family: var(--font-family--secondary);
  font-size: var(--h4-font-size);
  line-height: 1.6;
  margin: 0;
}


</style>
