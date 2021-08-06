export class MyAccountSideMenu {

  get title(): Cypress.Chainable {
    return cy.contains(".sf-content-pages__title", "My Account");
  }

}
