<template>
  <div id="home12">   
       <span>Stack Searched Products  </span>  
    <form class="inline-form" @submit.prevent="handleSearch" autocomplete="off">
        <div class="slidebar sf-section__content">
      <SfInput v-model="form.value" type="text" valid class="c-input" />     
      <SfButton type="submit" > Search </SfButton>
        </div>
    </form>
    <div>
      
      <SfProductCardHorizontal
              v-for="product in content"
              :key="product.title"              
              :title="product.title"
              :description="product.description"
              :image="product.image.url" 
               :regular-price="product.price"
              />

  </div>
   </div>
</template>
<script>
import { SfInput, SfRadio,SfButton, SfProductCardHorizontal,SfTabs,SfHeading } from "@storefront-ui/vue";
import { useContent } from "@vsf-enterprise/contentstack";
import { ref } from "@vue/composition-api";
export default {
  components: {
    SfInput,
    SfButton,SfHeading,
    SfTabs,SfRadio,SfProductCardHorizontal
  },
  mounted () {
    window.analytics.page('Search product')
  },
  setup(props, context) {
    const type = "products";
    const form = ref({});
    const { search, content } = useContent(type);
    const handleSearch = async () => handleForm(search)();
    const handleFilter = async () => {
        // console.log('test radio log');
    };
  
    const handleForm = (fn) => async () => {
      await fn({
        custom: {
          field: "gender",
          value: form.value.value,
          type: "products",
        },
      });
    };
    return {
      content,
      handleSearch,
      handleFilter,
      form,
    };
  },
};
</script>
<style scoped>
.slidebar{
    display: flex;
    justify-content: space-between;
    width: 50%;
    
}

.inline-form{
    text-align: -webkit-center;
    padding-bottom: 3rem;
}

.c-input{
    width: 100%;
    padding-right: 2rem;
}

.c-items{
    text-align-last: center;
}

.s-msg{
    padding-top: 3rem;
}
</style>