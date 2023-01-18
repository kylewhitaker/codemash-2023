import { Action, Route } from '../enums';
import { Registration } from '../interfaces';

function checkActivityLog(
  registrar: string,
  action: Action,
  data: Registration,
  row: number = 1
): Cypress.Chainable<any> {
  return cy.url().then((url) => {
    if (!url.includes(Route.Activity)) cy.visit(Route.Activity);
    cy.get(`tbody tr:nth-child(${row}) td:nth-child(1)`).should('contain', registrar);
    cy.get(`tbody tr:nth-child(${row}) td:nth-child(2)`).should('contain', action);
    cy.get(`tbody tr:nth-child(${row}) td:nth-child(5)`).should('contain', data.firstName);
    cy.get(`tbody tr:nth-child(${row}) td:nth-child(6)`).should('contain', data.lastName);
    cy.checkRegistrationItems(data.items, row);
  });
}

Cypress.Commands.add('checkActivityLog', checkActivityLog);

declare global {
  namespace Cypress {
    interface Chainable {
      checkActivityLog: typeof checkActivityLog;
    }
  }
}

export {};
