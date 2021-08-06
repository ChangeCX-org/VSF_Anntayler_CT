import { Cart } from "./components/cart";
import { Header } from "./components/header";

export class BasePage {

  get path() {
    return "/";
  }

  get cart() {
    return new Cart();
  }

  get header() {
    return new Header();
  }

  visit() {
    cy.visit(this.path).then(() => {
      return this;
    });
  }

}

export default new BasePage();
