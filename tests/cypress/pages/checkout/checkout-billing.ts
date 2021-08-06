export class CheckoutBillingPage {
  
  get heading(): Cypress.Chainable {
    return cy.contains(".sf-heading.title", "Billing address");
  }

  get copyAddressLabel(): Cypress.Chainable {
    return cy.get('[data-testid="copyShippingAddress"] > label');
  }

  get continueToPaymentBtn(): Cypress.Chainable {
    return cy.get("form").contains("Continue to payment");
  }

}
