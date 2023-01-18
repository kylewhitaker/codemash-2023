import { ID, Route } from '../enums';
import { Registration } from '../interfaces';

function deleteRegistration(data: Registration): Cypress.Chainable<any> {
  return cy.url().then((url) => {
    if (!url.includes(Route.Registrations)) cy.visit(Route.Registrations);

    const { firstName, lastName } = data;
    cy.searchRegistration(firstName, lastName);
    cy.get('#deleteAction').click();
    cy.get('input[placeholder=Delete]').type('Delete');
    cy.get(`#${ID.Modal_Confirm}`).click();

    cy.get(`#${ID.Snackbar}`).should('contain', `Successfully deleted registration for ${firstName} ${lastName}`);
    cy.searchRegistration(firstName, lastName, false);

    cy.clearSearch();
  });
}

Cypress.Commands.add('deleteRegistration', deleteRegistration);

declare global {
  namespace Cypress {
    interface Chainable {
      deleteRegistration: typeof deleteRegistration;
    }
  }
}

export {};
