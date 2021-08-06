import { BasePage } from "../base";


export class CheckoutOrderPage extends BasePage {

  get thankYouHeader(): Cypress.Chainable {
    return cy.contains(".sf-call-to-action__text-container", "Thank you for your order!");
  }
  
}
