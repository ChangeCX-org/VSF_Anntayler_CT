<template>
  <div>
   <!-- <SfOverlay :visible="true" /> -->
    <SfHeader
      data-cy="app-header"
      class="sf-header--has-mobile-search"
      :class="{ 'header-on-top': isSearchOpen }"
    >
      <!-- TODO: add mobile view buttons after SFUI team PR -->
      <template #logo>
        <nuxt-link
          data-cy="app-header-url_logo"
          :to="localePath('/')"
          class="sf-header__logo"
        >
          <SfImage
            src="/icons/logo.svg"
            alt="Vue Storefront Next"
            class="sf-header__logo-image"
          />
        </nuxt-link>
      </template>
      <template>
       <div>{{categories}}</div> 
      </template>
      <template #navigation>
        <SfHeaderNavigationItem
          v-for="(category, index) in category_head"
          :key="category.id"
          class="nav-item"
          :class="{
            'sf-header-navigation-item--is-active': hoveredCategory > -1
          }"
          :data-cy="`app-header-url_${category.name}`"
          :label="category.name"
          :link="localePath(`/c/${category.slug}`)"
          @mouseover="onNavigationMouseOver(index)"
          @mouseleave="onNavigationMouseLeave"
          @close="isVisible = false"

        >
          <SfMegaMenu
          :is-absolute="true"
            class="sb-mega-menu menu__nav"
            title="Menu"
            :visible="isMegaMenuOpen && hoveredCategory === index"
            transitionName="sf-fade"
            @close="currentCategory = ''"
          >
            <SfMegaMenuColumn
              v-for="(cat, i) in categoryTree[index].items"
              :key="i"
              :title="cat.label"
            >
              <SfList>
                <SfListItem class="list__item">
                  <SfMenuItem :label="cat.label" class="menu__item">
                    <template #label>
                      <nuxt-link
                        :to="localePath(`/c/${category.slug}/${cat.slug}`)"
                        :class="cat.isCurrent ? 'sidebar--cat-selected' : ''"
                      >
                        All
                      </nuxt-link>
                    </template>
                  </SfMenuItem>
                </SfListItem>
                <SfListItem
                  class="list__item"
                  v-for="(subCat, j) in cat.items"
                  :key="j"
                >
                  <SfMenuItem :label="subCat.label" class="menu__item">
                    <template #label="{ label }">
                      <nuxt-link
                        :to="localePath(`/c/${category.slug}/${subCat.slug}`)"
                        :class="subCat.isCurrent ? 'sidebar--cat-selected' : ''"
                      >
                        {{ label }}
                      </nuxt-link>
                    </template>
                  </SfMenuItem>
                </SfListItem>
              </SfList>
            </SfMegaMenuColumn>
            <SfMegaMenuColumn
              class="sf-mega-menu-column--pined-content-on-mobile sf-mega-menu-column--hide-header-on-mobile sb-mega-menu__featured"
              title="Featured"
            >
              <div class="sb-mega-menu__banners">
                <SfBanner
                  v-for="(banner, key) in banners"
                  :key="key"
                  :title="banner.title"
                  :subtitle="banner.subtitle"
                  :image="banner.pictures"
                  class="sb-mega-menu__banner"
                />
              </div>
            </SfMegaMenuColumn>
          </SfMegaMenu>
        </SfHeaderNavigationItem>
      </template>

       <template #aside>
        <LocaleSelector class="smartphone-only" />
      </template>
       <template #header-icons>
        <div class="sf-header__icons">
          <SfButton
            class="sf-button--pure sf-header__action"
            @click="toggleWishlistSidebar"
          >
            <SfIcon
              class="sf-header__icon"
              :icon="wishlistIcon"
              size="1.25rem"
            />
          </SfButton>
          <SfButton
            class="sf-button--pure sf-header__action"
            @click="toggleCartSidebar"
          >
            <SfIcon class="sf-header__icon" icon="empty_cart" size="1.25rem" />
            <SfBadge
              v-if="cartTotalItems"
              class="sf-badge--number cart-badge"
              >{{ cartTotalItems }}</SfBadge
            >
          </SfButton>
        </div>
      </template>
      <template #search>
        <SfSearchBar
          ref="searchBarRef"
          :placeholder="$t('Search for items')"
          aria-label="Search"
          class="sf-header__search"
          :value="term"
          @input="handleSearch"
          @keydown.enter="handleSearch($event)"
          @focus="isSearchOpen = true"
          @keydown.esc="closeSearch"
          v-click-outside="closeSearch"

        >
          <template #icon>
            <SfButton
              v-if="!!term"
              class="sf-search-bar__button sf-button--pure"
                @click="closeOrFocusSearchBar"
            >
              <span class="sf-search-bar__icon">
                <SfIcon color="var(--c-text)" size="18px" icon="cross" />
              </span>
            </SfButton>
            <SfButton
              v-else
              class="sf-search-bar__button sf-button--pure"
              @click="
                isSearchOpen ? (isSearchOpen = false) : (isSearchOpen = true)
              "
            >
              <span class="sf-search-bar__icon">
                <SfIcon color="var(--c-text)" size="20px" icon="search" />
              </span>
            </SfButton>
          </template>
        </SfSearchBar>
      </template>
    </SfHeader>
    <SearchResults
      :visible="isSearchOpen"
      :result="result"
      @close="closeSearch"
    />
    <SfOverlay :visible="isSearchOpen" />
    <MobileNavigation
      class="smartphone-only"
      :category-tree="categoryTree"
    />
  </div>
</template>

<script>
import {
  SfHeader,
  SfImage,
  SfIcon,
  SfButton,
  SfBadge,
  SfSearchBar,
  SfOverlay,
  SfTabs,
  SfMegaMenu,
  SfList,
  SfMenuItem,
  SfBanner


} from "@storefront-ui/vue";
import { useUiState } from "~/composables";
import {
  useCart,
  useWishlist,
  useUser,
  cartGetters,
  useFacet,
  useCategory,
  categoryGetters
} from "@vsf-enterprise/commercetools";

import { reactive, computed, ref, onBeforeUnmount, watch } from "@vue/composition-api";
import { onSSR } from "@vue-storefront/core";
import { useUiHelpers } from "~/composables";
import LocaleSelector from "./LocaleSelector";
import SearchResults from "~/components/SearchResults";
import { clickOutside } from "@storefront-ui/vue/src/utilities/directives/click-outside/click-outside-directive.js";
import {
  mapMobileObserver,
  unMapMobileObserver
} from "@storefront-ui/vue/src/utilities/mobile-observer.js";
import debounce from "lodash.debounce";
import MobileNavigation from '~/components/MobileNavigation.vue'

export default {
  components: {
    SfHeader,
    SfImage,
    LocaleSelector,
    SfIcon,
    SfButton,
    SfBadge,
    SfSearchBar,
    SearchResults,
    SfOverlay,
    SfTabs,
    SfMegaMenu,
    SfList,
    SfMenuItem,
    SfBanner,
    MobileNavigation,
  },
  data() {
    return {
      isVisible: true,
      banners: [
        {
          title: "THE NEW TREND",
          subtitle: "T-shirts",
          pictures: {
            mobile: "https://images.contentstack.io/v3/assets/bltcefcb29e8daeb161/blt5132523fbe8190db/60d475b71558ad558221718a/men.png",
            desktop: "https://images.contentstack.io/v3/assets/bltcefcb29e8daeb161/blt5132523fbe8190db/60d475b71558ad558221718a/men.png"
          }
        }
      ]
    };
  },
  methods: {
      changeVisibility() {
        this.isVisible = !this.isVisible;
      },
    },
  directives: { clickOutside },
  mounted(){
console.log("eswaran",this.categories.value);
  },
  setup(props, { root }) {
    const isMegaMenuOpen = ref(false);
    const hoveredCategory = ref(-1);
    const {
      toggleCartSidebar,
      toggleWishlistSidebar,
      toggleLoginModal,
      isMenuSlideBarOpen,
      isMenuSlideBarClose
    } = useUiState();
    const { setTermForUrl, getFacetsFromURL } = useUiHelpers();
    const th = useUiHelpers();
    const { result, search } = useFacet();
    const { isAuthenticated, load: loadUser } = useUser();
    const { cart, load: loadCart } = useCart();
    const { load: loadWishlist, wishlist } = useWishlist();
    const { search: searchCategories ,categories, getTree } = useCategory();
    const category_head = categories.value.filter(cat => {
      console.log(categories,'cat');
      return cat.parent === null;
    });console.log(  categories.value,'categories');
    const term = ref(getFacetsFromURL().phrase);
    const isSearchOpen = ref(false);
    const searchBarRef = ref(null);
    const cartTotalItems = computed(() => {
      const count = cartGetters.getTotalItems(cart.value);
      return count ? count.toString() : null;
    });



    const accountIcon = computed(() =>
      isAuthenticated.value ? "profile_fill" : "profile"
    );
    const wishlistIcon = computed(() => {
      return wishlist?.value?.lineItems?.length ? "heart_fill" : "heart";
    });

    const onNavigationMouseOver = index => {
      (isMegaMenuOpen.value = true),
        (hoveredCategory.value = index);
    };
    const onNavigationMouseLeave = () => {
        isMegaMenuOpen.value = false
    };

    // TODO: https://github.com/DivanteLtd/vue-storefront/issues/4927
    const handleAccountClick = async () => {
      if (isAuthenticated.value) {
        return root.$router.push("/my-account");
      }

      toggleLoginModal();
    };

    const activeCategory = computed(() => {
      const items = categoryTree.value.items;
      if (!items) {
        return "";
      }
      const category = items.find(
        ({ isCurrent, items }) =>
          isCurrent || items.find(({ isCurrent }) => isCurrent)
      );
      return category?.label || items[0].label;
    });

    onSSR(async () => {
      await searchCategories({});
      await loadUser();
      await loadCart();
      await loadWishlist();
      await search(th.getFacetsFromURL());
    });

    const categoryTree = computed(() => categories.value
      .filter(category => !category.parent)
      .map(category => categoryGetters.getTree(category)
    ));

    const closeSearch = () => {
      if (!isSearchOpen.value) return;
      term.value = "";
      isSearchOpen.value = false;
    };

    const handleSearch = debounce(async paramValue => {
      term.value = paramValue.target?.value || paramValue;
      await search({
        filters: {},
        page: 1,
        itemsPerPage: 20,
        sort: "latest",
        phrase: term.value
      });
    }, 1000);

    const isMobile = computed(() => mapMobileObserver().isMobile.get());

    const closeOrFocusSearchBar = () => {
      if (isMobile.value) {
        return closeSearch();
      } else {
        term.value = "";
        return searchBarRef.value.$el.children[0].focus();
      }
    };

    watch(
      () => term.value,
      (newVal, oldVal) => {
        if (isMobile.value && !term.value) return;
        const hasOnlyNewValue = !oldVal && newVal;
        const isSearchClosed = isSearchOpen.value === false;
        const hasValueChanged =
          newVal && oldVal ? newVal.length !== oldVal.length : false;
        if (hasOnlyNewValue || (hasValueChanged && isSearchClosed)) {
          isSearchOpen.value = true;
        }
      }
    );

    onBeforeUnmount(() => {
      unMapMobileObserver();
    });

    return {
      category_head,
      categories,
      accountIcon,
      cartTotalItems,
      handleAccountClick,
      toggleCartSidebar,
      toggleWishlistSidebar,
      setTermForUrl,
      term,
      isSearchOpen,
      closeSearch,
      handleSearch,
      result,
      closeOrFocusSearchBar,
      searchBarRef,
      isMobile,
      wishlistIcon,
      activeCategory,
      th,
      categoryTree,
      hoveredCategory,
      onNavigationMouseOver,
      onNavigationMouseLeave,
      isMegaMenuOpen,
      isMenuSlideBarOpen,
      isMenuSlideBarClose
    };
  }
};
</script>

<style lang="scss" scoped>

.sf-header {
  --header-padding:  var(--spacer-sm);
  @include for-desktop {
    --header-padding: 0;
  }
  &__logo-image {
      height: 100%;
  }
  &__logo{
        //   --image-height: auto;
       --image-height: 3.125rem;
    //    --image-width: 15rem;
  }
  &__icon{
    --icon-color: var(--c-primary-variant);
  }
}
.header-on-top {
  z-index: 2;
}
.nav-item {
  --header-navigation-item-margin: 0 var(--spacer-base);
}
.cart-badge {
  position: absolute;
  bottom: 40%;
  left: 40%;
}
.menu {
  &__nav {
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 1;
    box-shadow: rgba(68, 67, 67, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px;
  }
  &__item {
    :hover {
      color: var(--c-primary);
      font-weight: 500;
      font-size: medium;
    }
  }
}
</style>
