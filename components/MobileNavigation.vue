<template>
  <div class="mobile_navigation">
    <SfSidebar
      :visible="isMenuSlideBarOpen"
      class="sidebar sf-sidebar--right"
    >
      <template #bar>
        <SfBar
          :title="currentCategory.label || 'Categories'"
          :back="showBackButton"
          class="sf-mega-menu__bar"
          @click:back="goBack"
          @click:close="toggleMenuSlideBar"
          close
        />
      </template>
      <div>
        <SfHeaderNavigationItem
          v-if="currentCategory.label"
          label="All"
          :data-cy="`app-header-url_${currentCategory.label}_all`"
          @click.native="navigateToCategory(localePath(currentCategory.path))"
        />
        <SfHeaderNavigationItem
          v-for="(category, index) in currentCategory.items"
          :key="category.id"
          :data-cy="`app-header-url_${category.label}`"
          :label="category.label"
          @click.native="onCategoryClick(index, localePath(`${currentCategory.path}/${category.slug}`))"
        />
      </div>
    </SfSidebar>
  </div>
</template>

<script>
import {
  SfBar,
  SfSidebar
} from "@storefront-ui/vue"
import { ref, computed } from '@vue/composition-api'
import { useUiState } from "~/composables"

export default {
  components: { SfBar, SfSidebar },
  props: {
    categoryTree: {
      type: Array,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const currentCategoryIndices = ref([])
    const { toggleMenuSlideBar, isMenuSlideBarOpen } = useUiState()
    // Computed
    const showBackButton = computed(() => currentCategoryIndices.value.length > 0)
    const currentCategory = computed(() => {
      let currentCategory = { items: props.categoryTree }
      let paths = []
      for (let index of currentCategoryIndices.value) {
        currentCategory = currentCategory.items[index]
        paths.push(currentCategory.slug)
      }
      currentCategory.path = `/c/${paths.join("/")}`
      return currentCategory
    })
    // Methods
    const onCategoryClick = (index, link) => {
      if (currentCategory.value.items[index].items.length) {
        currentCategoryIndices.value.push(index)
      } else {
        navigateToCategory(link)
      }
    }
    const goBack = () => {
      currentCategoryIndices.value.pop()
    }
    const navigateToCategory = (link) => {
      context.root.$router.push(link)
      toggleMenuSlideBar()
    }

    return {
      currentCategory,
      showBackButton,
      onCategoryClick,
      goBack,
      navigateToCategory,
      toggleMenuSlideBar,
      isMenuSlideBarOpen
    }
  }
}
</script>

<style lang="scss" scoped>
  .mobile_navigation {
    width: 100%;
    --sidebar-content-padding: 0;
  }
</style>
