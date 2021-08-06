import requests from "../api/requests";
import page from "../pages/page-factory";
import { Data } from "../types/data";
import generator from "../utils/data-generator";

before(() => {
  cy.fixture("test-data/e2e-user-login").then((fixture) => {
    cy.fixtures = {
      data: fixture
    };
  });
});

context(["regression"], "User login", () => {
  it("Should successfully login", () => {
    const data: any | Data = cy.fixtures.data["Should successfully login"];
    data.customer.email = generator.email;
    requests.customerSignMeUp(data.customer).then(() => {
      cy.clearCookies();
    });
    page.home.visit();
    page.home.header.openAccount();
    page.components.accountModal.loginToAccountBtn.click();
    page.components.accountModal.fillForm(data.customer);
    page.components.accountModal.loginBtn.click();
    page.components.accountModal.container.should("not.exist");
    page.components.header.openAccount();
    page.myAccount.myProfile.sideMenu.title.should("be.visible");

  });

  it("Incorrect credentials - should display an error", () => {
    const data: any | Data = cy.fixtures.data["Incorrect credentials - should display an error"];
    data.customer.email = generator.email;
    page.home.visit();
    page.home.header.openAccount();
    page.components.accountModal.loginToAccountBtn.click();
    page.components.accountModal.fillForm(data.customer);
    page.components.accountModal.loginBtn.click();
    page.components.accountModal.container.contains(data.errorMessage).should("be.visible");
  });
});
