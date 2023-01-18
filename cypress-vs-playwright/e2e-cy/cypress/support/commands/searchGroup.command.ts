import { Route } from '../enums';

function searchGroup(name: string, shouldExist: boolean = true): Cypress.Chainable<any> {
  return cy.url().then((url) => {
    if (!url.includes(Route.Groups)) cy.visit(Route.Groups);
    cy.get('input[placeholder=Search]').type(`${name}`);
    cy.get('tbody tr:nth-child(2) td').should('not.exist');
    cy.get(`tbody tr td[value="${name}"]`).should(shouldExist ? 'exist' : 'not.exist');
  });
}

Cypress.Commands.add('searchGroup', searchGroup);

declare global {
  namespace Cypress {
    interface Chainable {
      searchGroup: typeof searchGroup;
    }
  }
}

export {};
