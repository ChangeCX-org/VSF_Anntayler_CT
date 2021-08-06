import { Customer } from "../../types/customer";
import { BasePage } from "../base";


export class CheckoutShippingPage extends BasePage {

  get heading(): Cypress.Chainable {
    return cy.contains(".sf-heading.title", "Shipping details");
  }

  get firstName(): Cypress.Chainable {
    return cy.get("#firstName");
  }

  get lastName(): Cypress.Chainable {
    return cy.get("#lastName");
  }

  get street(): Cypress.Chainable {
    return cy.get("#streetName");
  }

  get streetLabel(): Cypress.Chainable {
    return cy.get('[for="street"]');
  }

  get apartment(): Cypress.Chainable {
    return cy.get("#apartment");
  }

  get apartmentLabel(): Cypress.Chainable {
    return cy.get('[for="apartment"]');
  }

  get city(): Cypress.Chainable {
    return cy.get("#city");
  }

  get zipCode(): Cypress.Chainable {
    return cy.get("#zipCode");
  }

  get country(): Cypress.Chainable {
    return cy.get("#Country");
  }

  get phone(): Cypress.Chainable {
    return cy.get("#phone");
  }

  get selectShippingMethodBtn(): Cypress.Chainable {
    return cy.get("form").contains("Select shipping method");
  }
    
  get shippingMethodLabels(): Cypress.Chainable {
    return cy.get(".shipping__label");
  }

  get continueToPaymentBtn(): Cypress.Chainable {
    return cy.get("form").contains("Continue to billing");
  }

  public fillForm(customer: Customer): void {
    this.firstName.type(customer.firstName);
    this.lastName.type(customer.lastName);
    this.street.type(customer.address.street);
    this.apartmentLabel.click();
    this.apartment.type(customer.address.apartment);
    this.city.type(customer.address.city);
    this.zipCode.type(customer.address.zipCode);
    this.country.select(customer.address.country);
    this.phone.type(customer.address.phoneNumber);
  }

}
