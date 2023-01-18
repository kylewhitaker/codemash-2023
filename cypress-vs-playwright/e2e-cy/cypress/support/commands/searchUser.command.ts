import { Route } from '../enums';

function searchUser(firstName: string, lastName: string, shouldExist: boolean = true): Cypress.Chainable<any> {
  return cy.url().then((url) => {
    if (!url.includes(Route.Users)) cy.visit(Route.Users);
    cy.get('input[placeholder=Search]').clear().type(`${firstName} ${lastName}`);
    cy.get('tbody tr:nth-child(2) td').should('not.exist');
    cy.get(`tbody tr td[value="${firstName} ${lastName}"]`).should(shouldExist ? 'exist' : 'not.exist');
  });
}

Cypress.Commands.add('searchUser', searchUser);

declare global {
  namespace Cypress {
    interface Chainable {
      searchUser: typeof searchUser;
    }
  }
}

export {};
