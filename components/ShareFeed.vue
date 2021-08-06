<template>
<div>
  <SfSection :title-heading=Image.titleheading :subtitle-heading=Image.subtitle  class="title" v-for="(Image, i) in content" :key="i" >
    <div class="grid grid-images">
        <!-- {{Image.share_your_look[0].image.url}} -->
      <div class="grid__row">
        <div class="grid__col">
          <SfImage v-if="isMobile" :src=Image.share_your_look[0].image.url alt="katherina_trn" :width="160" :height="160">katherina_trn</SfImage>
          <SfImage v-else :src=Image.share_your_look[0].image.url alt="katherina_trn" :width="470" :height="470">katherina_trn</SfImage>
          
        </div>
        <div class="grid__col small">
          <SfImage v-if="isMobile" :src=Image.share_your_look[1].image.url alt="katherina_trn" :width="160" :height="160">katherina_trn</SfImage>
          <SfImage v-else :src=Image.share_your_look[1].image.url alt="katherina_trn" :width="470" :height="160">katherina_trn</SfImage>
        </div>
      </div>
      <div class="grid__row">
        <div class="grid__col small">
          <SfImage v-if="isMobile" :src=Image.share_your_look[2].image.url alt="katherina_trn" :width="160" :height="160">katherina_trn</SfImage>
           <SfImage v-else :src=Image.share_your_look[2].image.url alt="katherina_trn" :width="470" :height="160">katherina_trn</SfImage>
        </div>
        <div class="grid__col">
          <SfImage v-if="isMobile" :src=Image.share_your_look[3].image.url alt="katherina_trn" :width="160" :height="160">katherina_trn</SfImage>
          <SfImage v-else :src=Image.share_your_look[3].image.url alt="katherina_trn" :width="470" :height="470">@instagram</SfImage>
        </div>
      </div>
    </div>
    <!-- {{content[0].share_your_look}} -->
  </SfSection>
</div>
</template>
<script>
import {
  SfSection,
  SfImage
} from '@storefront-ui/vue';
import {
  mapMobileObserver,
  unMapMobileObserver
} from '@storefront-ui/vue/src/utilities/mobile-observer.js';
import { useContent } from '@vsf-enterprise/contentstack';
import { onSSR } from '@vue-storefront/core';
export default {
  name: 'InstagramFeed',
  components: {
    SfSection,
    SfImage
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
  computed: {
    ...mapMobileObserver()
  },
  beforeDestroy() {
    unMapMobileObserver();
  }
};
</script>
<style lang="scss" scoped>
.title {
  --heading-title-font-weight: var(--font-weight--semibold);
  --section-margin: var(--spacer-xl) 0;
  --section-content-margin: var(--spacer-xl) 0;
  --heading-title-font-size: var(--h2-font-size);
  @include for-desktop {
    --section-margin: var(--spacer-2xl) 0;
    --section-content-margin: var(--spacer-2xl) 0;
  }
}
.grid {
  display: flex;
  max-height: 20.625rem;
  width: 100%;
  justify-content: center;
  margin: 0;
  @include for-desktop {
    max-height: 40.625rem;
    max-width: 60rem;
    margin: 0 auto;
  }
  &__row {
    display: flex;
    flex-direction: column;
    & + & {
      margin-left: var(--spacer-xs);
      @include for-desktop {
        margin-left: var(--spacer-sm);
      }
    }
  }
  &__col {
    width: 10rem;
    height: 10rem;
    @include for-desktop {
      &.small {
        height: 10rem;
      }
     width: 29.375rem;
     height: 29.375rem;
    }
    & + & {
      margin-top: var(--spacer-xs);
      @include for-desktop {
        margin-top: var(--spacer-sm);
      }
    }
  }
}

</style>
