import { Route } from '../enums';

function searchRegistration(firstName: string, lastName: string, shouldExist: boolean = true): Cypress.Chainable<any> {
  return cy.url().then((url) => {
    if (!url.includes(Route.Registrations)) cy.visit(Route.Registrations);
    cy.get('input[placeholder=Search]').type(`${firstName} ${lastName}`);
    cy.get('tbody tr:nth-child(2) td').should('not.exist');
    cy.get(`tbody tr td[value="${firstName} ${lastName}"]`).should(shouldExist ? 'exist' : 'not.exist');
  });
}

Cypress.Commands.add('searchRegistration', searchRegistration);

declare global {
  namespace Cypress {
    interface Chainable {
      searchRegistration: typeof searchRegistration;
    }
  }
}

export {};
