import { Customer } from "../../types/customer";


export class AccountModal {

  get container(): Cypress.Chainable {
    return cy.get(".sf-modal__container");
  }

  get email(): Cypress.Chainable {
    return cy.get("[data-cy='login-input_email']");
  }

  get firstName(): Cypress.Chainable {
    return cy.get("[data-cy='login-input_firstName']");
  }

  get lastName(): Cypress.Chainable {
    return cy.get("[data-cy='login-input_lastName']");
  }

  get password(): Cypress.Chainable {
    return cy.get("[data-cy='login-input_password']");
  }

  get iWantToCreateAccountCBLabel(): Cypress.Chainable {
    return cy.get("[data-testid='create-account'] label");
  }

  get submitBtn(): Cypress.Chainable {
    return cy.get("[data-cy='login-btn_submit']");
  }

  get loginToAccountBtn(): Cypress.Chainable {
    return cy.get("[data-cy='login-btn_login-into-account']");
  }

  get loginBtn(): Cypress.Chainable {
    return cy.get("[data-cy='login-btn_submit']");
  }

  fillForm(customer: Customer): void {
    if (customer.email) this.email.type(customer.email);
    if (customer.firstName) this.firstName.type(customer.firstName);
    if (customer.lastName) this.lastName.type(customer.lastName);
    if (customer.password) this.password.type(customer.password);
  }

}
