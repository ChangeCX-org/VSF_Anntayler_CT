<template>
  <div class="container">
    <SfButton
      class="container__lang container__lang--selected"
      @click="isLangModalOpen = !isLangModalOpen"
    >
    <!-- <SfImage :src="`/icons/currency_dollar.ico`" width="22" alt="Flag" class="top-sf-icon" /> -->
      <SfImage :src="`/icons/langs/${locale}.webp`" width="20" alt="Flag" class="top-sf-icon" />
    </SfButton>
      <SfButton
            class="sf-button--pure sf-header__action"
            @click="handleAccountClick"
          >
            <SfIcon
              :icon="accountIcon"
              size="1.25rem"
              class="sf-header__icon acc-icon"
            />
          </SfButton>
         
    <SfBottomModal :is-open="isLangModalOpen" title="Choose language" @click:close="isLangModalOpen = !isLangModalOpen">
      <SfList>
        <SfListItem v-for="lang in availableLocales" :key="lang.code">
          <a :href="switchLocalePath(lang.code)">
            <SfCharacteristic class="language">
              <template #title>
                <span>{{ lang.label }}</span>
              </template>
              <template #icon>
                <SfImage :src="`/icons/langs/${lang.code}.webp`" width="20" alt="Flag" class="language__flag" />
             
              </template>
            </SfCharacteristic>
          </a>
        </SfListItem>
      </SfList>
    </SfBottomModal>
  </div>
</template>

<script>
import {
  SfImage,
  SfSelect,
  SfButton,
  SfIcon,
  SfList,
  SfBottomModal,
  SfCharacteristic
} from '@storefront-ui/vue';
import { ref, computed } from '@vue/composition-api';
import { useUiState } from '~/composables';
import { useUser } from '@vsf-enterprise/commercetools';
import { onSSR } from '@vue-storefront/core';


export default {
  components: {
    SfImage,
    SfSelect,
    SfButton,
    SfIcon,
    SfList,
    SfBottomModal,
    SfCharacteristic
  },
  setup(props, { root }) {
    const { locales, locale } = root.$i18n;
    //  setup(props, context) {
    // const { locales, locale } = context.root.$i18n;
    const isLangModalOpen = ref(false);
    const availableLocales = computed(() => locales.filter(i => i.code !== locale));
    const { toggleLoginModal } = useUiState();
    const { isAuthenticated, load: loadUser } = useUser();
        
    
    const accountIcon = computed(() => isAuthenticated.value ? 'profile_fill' : 'profile');

      const handleAccountClick = async () => {
      if (isAuthenticated.value) {
        return root.$router.push('/my-account');
      }

      toggleLoginModal();
    };

   onSSR(async () => {
    await loadUser();
    });
    
    return {
      availableLocales,
      locale,
      accountIcon,      
      isLangModalOpen,
      handleAccountClick
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 -5px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
  .sf-bottom-modal {
    z-index: 2;
    left: 0;
    @include for-desktop {
      --bottom-modal-height: 100vh;
    }
  }
  .sf-list {
    .language {
      padding: var(--spacer-sm);
      &__flag {
        margin-right: var(--spacer-sm);
      }
    }
    @include for-desktop {
      display: flex;
    }
  }
  &__lang {
    width: 20px;
    --button-box-shadow: none;
    background: none;
    padding: 0 5px;
    display: flex;
    align-items: center;
    opacity: 0.5;
    border: none;
    &:hover,
    &--selected {
      opacity: 1;
    }
  }
}

//Custom

.top-sf-icon{
    border: solid 1px white;
    border-radius: 50%;
    margin-right: var(--spacer-sm);
}


.acc-icon{
        --icon-color: #ffffff;
        
}
</style>
