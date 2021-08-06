import { integrationPlugin } from '@vue-storefront/core';
import { defaultSettings } from '@vsf-enterprise/ct-faceting';

export default integrationPlugin(({ $vsf, integration }) => {
  integration.configure('ctf', {
    ...defaultSettings,
    ...$vsf.$ct.config,
    ...{"apiConfigModule":"@vsf-enterprise\u002Fcommercetools\u002Fnuxt","i18n":{"useNuxtI18nConfig":true}}
  });
});
