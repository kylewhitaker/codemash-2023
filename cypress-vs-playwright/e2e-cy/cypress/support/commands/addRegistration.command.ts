import { ID, Route } from '../enums';
import { Registration } from '../interfaces';

function addRegistration(data: Registration): Cypress.Chainable<any> {
  return cy.url().then((url) => {
    if (!url.includes(Route.Registrations)) cy.visit(Route.Registrations);

    const { firstName, lastName, items } = data;
    cy.get(`#${ID.Page_Registrations_Add}`).click();
    cy.get(`#${ID.Form_Registration_FirstName}`).type(firstName);
    cy.get(`#${ID.Form_Registration_LastName}`).type(lastName);
    items.forEach((item) => cy.get(`#${item}`).click());
    cy.get(`#${ID.Form_Registration_Submit}`).click();

    cy.get(`#${ID.Snackbar}`).should('contain', `Successfully created registration for ${firstName} ${lastName}`);
    cy.searchRegistration(firstName, lastName);
    cy.checkRegistrationItems(items);

    cy.clearSearch();
  });
}

Cypress.Commands.add('addRegistration', addRegistration);

declare global {
  namespace Cypress {
    interface Chainable {
      addRegistration: typeof addRegistration;
    }
  }
}

export {};
