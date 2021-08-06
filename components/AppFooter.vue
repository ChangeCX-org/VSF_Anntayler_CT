<template>
  <SfFooter class="sb-footer">
      <SfFooterColumn v-for="glink in content[0].links_group" :key="glink.static_links_title" :title="glink.static_links_title">
      <SfList v-if="glink.static_link">
        <SfListItem v-for="ilink in glink.static_link" :key="ilink.title">
          <SfMenuItem :label="ilink.title">tittle</SfMenuItem>
        </SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn title="Social">
  <div class="footer__socials">
      <SfImage class="footer__social-image" v-for="item in content[0].social_follow.social_media_platform" :key="item.follow_link.title" :src="'/icons/'+item.follow_link.title+'.svg'" :alt="item.follow_link.title"  />
  </div>
</SfFooterColumn>
<SfFooterColumn title="Language">
    <div class="footer__socials">
          <SfImage src="/icons/langs/en.webp" width="28" alt="Flag" class="footer__social-image top-sf-icon" />
   <span class="language_span">English</span>
    </div>
</SfFooterColumn>
<SfFooterColumn >
    </SfFooterColumn >
<SfFooterColumn >
     <div style="display: flex; height: 32px; margin-top: 22px;">
 <SfInput class="sf-input--outline" type="text" placeholder="Type your email address" style="width: 242px; min-height: auto; height: 32px; font-size: 16px; color: #43464E; background-color: #F1F2F3; --input-border-color: #F1F2F3;"/>
            <SfButton style="width: 116px; height: 32px;">Subscribe</SfButton>
     </div>
</SfFooterColumn>
      </SfFooter>
</template>

<script>
import { SfFooter, SfList, SfImage, SfMenuItem, SfIcon, SfButton, SfInput } from '@storefront-ui/vue';
import { useContent } from '@vsf-enterprise/contentstack';
import { ref, onMounted } from '@vue/composition-api';
import { onSSR } from '@vue-storefront/core';
export default {
    components: {
    SfFooter,
    SfList,
    SfImage,
    SfMenuItem, 
    SfIcon, 
    SfButton, 
    SfInput
  }, 
  setup(props,context){
const type='footer_static_content';
    const{search,content} = useContent(type);
    onSSR(async () => {
      await search({
        id: 'blt244c8525b8586a78',
        type: 'footer_static_content'
      });
    });
    return {
      content
    }
  },
  
};
</script>

<style lang="scss">

.footer {
  margin-bottom: 3.75rem;
  @include for-desktop {
    margin-bottom: 0;
  }
  &__socials {
    display: flex;
    justify-content: space-between;
    margin: 0 auto var(--spacer-lg);
    padding: var(--spacer-base) var(--spacer-xl);
    @include for-desktop {
      justify-content: flex-start;
      padding: var(--spacer-xs) 0;
      margin: 0 auto;
    }
  }
  &__social-image {
    margin: 0 var(--spacer-2xs) 0 0;
  }
}
.sf-footer {
  @include for-desktop {
    border-top: var(--spacer-xs) solid var(--c-primary);
    padding-bottom: 0;
    margin-top: var(--spacer-2xl);
  }
  &__container {
    margin: var(--spacer-sm);
    @include for-desktop {
      max-width: 69rem;
      margin: 0 auto;
    }
  }
}
//custom
.top-sf-icon{
    border: solid 1px white;
    border-radius: 50%;
    margin-right: var(--spacer-sm);
}
.language_span{
    color: var(--c-white);
    display: flex;
    align-items: center;
    font: var(--hero-item-subtitle-font, var(--hero-item-subtitle-font-weight, var(--font-weight--normal)) var(--hero-item-subtitle-font-size, var(--h6-font-size))/var(--hero-item-subtitle-font-line-height, 1.4) var(--hero-item-subtitle-font-family, var(--font-family--secondary)));
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
}
// .sf-icon {
//     fill: var(--c-white);
// }
</style>
