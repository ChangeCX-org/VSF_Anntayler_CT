/// <reference types='cypress-tags' />

import { Data } from "../types/data";

declare global {
  namespace Cypress {
    interface Chainable {
      fixtures?: any | Data;
    }
  }
}
