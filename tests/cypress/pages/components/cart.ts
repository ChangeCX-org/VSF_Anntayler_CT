export class Cart {

  get goToCheckoutBtn(): Cypress.Chainable {
    return cy.get("#cart").contains("Go to checkout");
  }

}
