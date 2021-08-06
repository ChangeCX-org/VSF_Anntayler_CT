import requests from "../api/requests";
import page from "../pages/page-factory";
import { Data } from "../types/data";
import generator from "../utils/data-generator";


before(() => {
  cy.fixture("test-data/e2e-user-registration").then((fixture) => {
    cy.fixtures = {
      data: fixture
    };
  });
});

context(["regression"], "User registration", () => {
  it("Should successfully register", () => {
    const data: any | Data = cy.fixtures.data["Should successfully register"];
    data.customer.email = generator.email;

    page.home.visit();
    page.home.header.openAccount();
    page.components.accountModal.fillForm(data.customer);
    page.components.accountModal.iWantToCreateAccountCBLabel.click();
    page.components.accountModal.submitBtn.click();
    page.components.accountModal.container.should("not.exist");
    page.components.header.openAccount();
    page.myAccount.myProfile.sideMenu.title.should("be.visible");
  });

  it("Existing user - should display an error", () => {
    const data: any | Data = cy.fixtures.data["Existing user - should display an error"];
    data.customer.email = generator.email;
    requests.customerSignMeUp(data.customer).then(() => {
      cy.clearCookies();
    });
    page.home.visit();
    page.home.header.openAccount();
    page.components.accountModal.fillForm(data.customer);
    page.components.accountModal.iWantToCreateAccountCBLabel.click();
    page.components.accountModal.submitBtn.click();
    page.components.accountModal.container.contains(data.errorMessage).should("be.visible");
  });
});
