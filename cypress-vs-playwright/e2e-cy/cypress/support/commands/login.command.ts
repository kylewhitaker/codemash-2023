import { ID, Route } from '../enums';

function login(username: string, password: string): Cypress.Chainable<any> {
  return cy
    .session([username, password], () => {
      cy.visit(Route.Login);
      cy.get(`#${ID.Login_Email}`).type(username);
      cy.get(`#${ID.Login_Password}`).type(password);
      cy.get(`#${ID.Login_Submit}`).click();
      cy.get(`#${ID.Greeting}`).should('exist');
    })
    .visit(Route.Login);
}

Cypress.Commands.add('login', login);

declare global {
  namespace Cypress {
    interface Chainable {
      login: typeof login;
    }
  }
}

export {};
