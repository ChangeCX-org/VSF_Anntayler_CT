<template>
   <div id="home12">
   <SfContentPages :title="content[0].title" active="About us">
    <SfContentPage v-for="menu in content[0].static_left_menu" :key="menu.left_menu_title" :title="menu.left_menu_title">
        <SfTabs >
         <SfTab v-for="tab in menu.tab_menu" :key="tab.static_tab_title" :title="tab.static_tab_title" >
         <span v-if="tab.pretext !== null"  v-html=tab.pretext></span>
          <br><br><h1><strong><span v-if="tab.subtitle !== null"  v-html=tab.subtitle></span></strong></h1><br>
          <span v-if="tab.description !== null"  v-html=tab.description></span>
         </SfTab>
        </SfTabs>      
    </SfContentPage>  
  </SfContentPages>
  </div>
</template>
<script>
  import { SfFooter, SfList, SfImage, SfMenuItem,SfContentPages,SfTabs  } from '@storefront-ui/vue';
  import { useContent } from '@vsf-enterprise/contentstack';
  import { ref, onMounted } from '@vue/composition-api';
  import { onSSR } from '@vue-storefront/core';
  export default {
    name:'Help',
     mounted () {
    window.analytics.page('Help')
  },
    components: {
      SfContentPages,
      SfTabs ,
      SfFooter,
      SfList,
      SfImage,
      SfMenuItem
    },
    setup(props, context) {
      const type = 'static_help_content'
      const{ search, content } = useContent(type);      
      onSSR(async () => {
        await search({ 
             id: 'blt92aea43612ecd8de',
            type: 'static_help_content'
            });
      });
      return {
        content
      }
    }
  }
</script>