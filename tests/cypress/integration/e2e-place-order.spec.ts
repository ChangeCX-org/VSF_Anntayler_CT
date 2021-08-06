import intercept from "../utils/network";
import page from "../pages/page-factory";


before(() => {
  cy.fixture("test-data/e2e-place-order").then((fixture) => {
    cy.fixtures = {
      data: fixture
    };
  });
});

context(["e2e", "happy-path", "regression"], "Order placement", () => {
  it("Should successfully place an order as a guest", () => {
    const getFacetCategories = intercept.getFacetCategories();
    const getFacetProductProjection = intercept.getFacetProductProjection();
    const getProduct = intercept.getProduct();
    const addToCart = intercept.addToCart();
    const getShippingMethods = intercept.getShippingMethods();

    page.home.visit();
    page.home.header.category(cy.fixtures.data.category).click().then(() => {
      cy.wait([getFacetCategories, getFacetProductProjection, getFacetCategories]);
    });
    page.category.products.first().click().then(() => {
      cy.wait([getProduct, getProduct, getProduct]);
    });
    page.product.addToCartBtn.click().then(() => {
      cy.wait(addToCart);
    });
    page.product.header.openCart();
    page.product.cart.goToCheckoutBtn.click();
    page.checkout.shipping.heading.should("be.visible");
    page.checkout.shipping.fillForm(cy.fixtures.data.customer);
    page.checkout.shipping.selectShippingMethodBtn.click().then(() => {
      cy.wait(getShippingMethods);
    });
    page.checkout.shipping.shippingMethodLabels.first().click();
    page.checkout.shipping.continueToPaymentBtn.click();
    page.checkout.billing.heading.should("be.visible");
    page.checkout.billing.copyAddressLabel.click();
    page.checkout.billing.continueToPaymentBtn.click();
    page.checkout.payment.heading.should("be.visible");
    page.checkout.payment.paymentLabel.first().click();
    page.checkout.payment.termsAndConditions.click();
    page.checkout.payment.makeAnOrderBtn.click();
    page.checkout.order.thankYouHeader.should("be.visible");
  });
});
