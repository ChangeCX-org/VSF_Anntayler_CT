const gql = require('graphql-tag');
const { CartFragment, CustomerFragment } = require('@vue-storefront/commercetools-api');

exports.basicProfile = gql`
  ${CartFragment}
  query getBasicProfile($locale: Locale!, $acceptLanguage: [Locale!]) {
    me {
      activeCart {
        ...DefaultCart
        anonymousId
      }
    }
  }
`;

exports.fullProfile = gql`
  ${CartFragment}
  ${CustomerFragment}
  query getFullProfile($locale: Locale!, $acceptLanguage: [Locale!]) {
    me {
      activeCart {
        anonymousId
        ...DefaultCart
      }
      customer {
        ...DefaultCustomer
      }
    }
  }
`;
