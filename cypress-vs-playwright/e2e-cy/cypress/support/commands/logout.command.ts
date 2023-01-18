import { ID, Route } from '../enums';

function logout(): Cypress.Chainable<any> {
  cy.get(`#${ID.Menu}`).click();
  cy.get(`#${ID.Menu_LogOut}`).click();
  return cy;
}

Cypress.Commands.add('logout', logout);

declare global {
  namespace Cypress {
    interface Chainable {
      logout: typeof logout;
    }
  }
}

export {};
