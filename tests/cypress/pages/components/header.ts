export class Header {

  get logoImg(): Cypress.Chainable {
    return cy.get(".sf-header__logo-image img");
  }

  private get icons(): Cypress.Chainable {
    return cy.get(".sf-header__action svg");
  }

  get accountIcon(): Cypress.Chainable {
    return this.icons.first();
  }

  get cartIcon(): Cypress.Chainable {
    return this.icons.last();
  }

  category(category: string): Cypress.Chainable {
    return cy.get(`[data-cy="app-header-url_${category.toLowerCase()}"]`);
  }

  openAccount(): Cypress.Chainable {
    return this.accountIcon.click({force: true});
  }

  openCart(): Cypress.Chainable {
    return this.cartIcon.click({force: true});
  }

}
