import { integrationPlugin } from '@vue-storefront/core';

export default integrationPlugin(({ integration }) => {
  integration.configure('adyen', { ...{"availablePaymentMethods":["scheme","paypal"],"clientKey":"test_EIJP53PPUFBB3JQ6G2JBLJYBX4ZKG2PY","environment":"test","methods":{"paypal":{"merchantId":"3QXQ7J54BAZ5A","intent":"authorize"}}} });
});
