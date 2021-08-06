import { BasePage } from "./base";

export class CategoryPage extends BasePage {

  get products(): Cypress.Chainable {
    return cy.get("[data-cy='category-product-card'] a");
  }

}
