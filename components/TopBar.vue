<template>
  <SfTopBar class="topbar">
    <template #left>
             <nuxt-link :to="localePath('/help')" class="sf-button sf-button--text">Find a Store</nuxt-link>        
      </template>
   
    <template #center>
        <!-- <p>{{ $t('Promotional Message Goes Here') }}</p> -->
        <p>{{msg}}</p>
        <SfButton class="topbar__button sf-button--text">{{ $t('Find out more') }}</SfButton>
      </template>
      <template #right>
        <LocaleSelector />
    </template>
  </SfTopBar>
</template>

<script>
import { SfButton, SfTopBar } from '@storefront-ui/vue';
import LocaleSelector from './LocaleSelector';
import { useUiState } from '~/composables';

export default {
  components: {
    SfTopBar,
    SfButton,
    LocaleSelector
  },
  setup(props, { root }) {
      const { toggleWishlistSidebar } = useUiState();
  
     return {
         toggleWishlistSidebar,
         msg: 'Promotional Message Goes Here'
       }; 
    }
};

</script>
<style lang="scss" scoped>
.topbar {
  position: relative;
  z-index: 2;
  &__button {
    margin: 0 0 0 var(--spacer-xs);
  }
}
//Custom

.sf-top-bar {
  background-color: #E76558;
}
.sf-button{
    color: white;
}


a {
  text-decoration: none;
  color: white;
}
p{
    color: white;
}
</style>
