import { BasePage } from "./base";

export class ProductPage extends BasePage {

  get addToCartBtn(): Cypress.Chainable {
    return cy.get('[data-cy="product-cart_add"] .sf-add-to-cart__button');
  }

  get gallery(): Cypress.Chainable {
    return cy.get(".sf-gallery");
  }

  get tabsDescription(): Cypress.Chainable {
    return cy.get(".sf-tabs .product__description");
  }
  
}
