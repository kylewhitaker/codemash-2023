function clearSearch(): Cypress.Chainable<any> {
  cy.get('input[placeholder=Search]').clear();
  return cy;
}

Cypress.Commands.add('clearSearch', clearSearch);

declare global {
  namespace Cypress {
    interface Chainable {
      clearSearch: typeof clearSearch;
    }
  }
}

export {};
