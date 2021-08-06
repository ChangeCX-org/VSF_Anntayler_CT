import { BasePage } from "../base";


export class CheckoutPaymentPage extends BasePage {

  get heading(): Cypress.Chainable {
    return cy.contains(".sf-heading.title", "Payment");
  }

  get paymentLabel(): Cypress.Chainable {
    return cy.get(".payment__label");
  }

  get termsAndConditions(): Cypress.Chainable {
    return cy.contains(".sf-checkbox__label", "Terms and conditions");
  }

  get makeAnOrderBtn(): Cypress.Chainable {
    return cy.contains(".sf-button", "Make an order");
  }

}
