import { BasePage } from "./base";


export class HomePage extends BasePage {

  visit() {
    cy.intercept("/_nuxt/pages/Category.js").as("categoryjs");
    super.visit();
    cy.wait("@categoryjs");
  }

}
