<template>
  <div id="home12" class="content c-items">
    <Form class="inline-form" @submit.prevent="handleSearch" autocomplete="off">
        <div class="slidebar sf-section__content">
      <SfInput v-model="form.value" type="text" valid class="c-input" />     
      <SfButton type="submit"> Search </SfButton>
      </div>
    </form>
     <span style="font-size:12px;color:green;" class="s-msg"> * * * Search following keys : Security, Additional Information, Privacy</span>
    <div v-if="content !== null" style="padding-top: 10px;text-align-last: left;">
      <div v-for="tab in content" :key="tab.title">
        <br /><br />
        <h1>
          <strong
            ><span v-if="tab.title !== null" v-html="tab.title"></span
          ></strong>
        </h1>
        <br />
        <span v-if="tab.pretext !== null" v-html="tab.pretext"></span>
        <br /><br />
        <h1>
          <strong
            ><span v-if="tab.subtitle !== null" v-html="tab.sub_title"></span
          ></strong>
        </h1>
        <br />
        <span v-if="tab.description !== null" v-html="tab.description" class="s-msg"></span>
      </div>
    </div>
  </div>
</template>
<script>
import { SfInput, SfButton, SfTabs } from "@storefront-ui/vue";
import { useContent } from "@vsf-enterprise/contentstack";
import { ref } from "@vue/composition-api";
export default {
  components: {
    SfInput,
    SfButton,
    SfTabs,
  },
  mounted () {
    window.analytics.page('Search')
  },
  setup(props, context) {
    const type = "static_help_content";
    const form = ref({});
    const { search, content } = useContent(type);
    const handleSearch = async () => handleForm(search)();
    const handleForm = (fn) => async () => {
      await fn({
        custom: {
          field: "title",
          value: form.value.value,
          type: "static_page_block",
        },
      });
    };
    return {
      content,
      handleSearch,
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