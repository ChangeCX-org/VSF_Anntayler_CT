FROM commercetools/commercetools-adyen-integration-notification:v8.1.2

ARG ADYEN_INTEGRATION_CONFIG

ENV ADYEN_INTEGRATION_CONFIG=$ADYEN_INTEGRATION_CONFIG