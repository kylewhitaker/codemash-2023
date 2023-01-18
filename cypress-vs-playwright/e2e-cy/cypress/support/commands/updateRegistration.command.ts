import { ID, Route } from '../enums';
import { Registration } from '../interfaces';
import { getSymmetricDifference } from '../utils';

function updateRegistration(dataBefore: Registration, dataAfter: Registration): Cypress.Chainable<any> {
  return cy.url().then((url) => {
    if (!url.includes(Route.Registrations)) cy.visit(Route.Registrations);

    cy.searchRegistration(dataBefore.firstName, dataBefore.lastName);
    cy.get('#editAction').click();
    if (dataAfter.firstName != dataBefore.firstName)
      cy.get(`#${ID.Form_Registration_FirstName}`).type(dataAfter.firstName);
    if (dataAfter.lastName != dataBefore.lastName) cy.get(`#${ID.Form_Registration_LastName}`).type(dataAfter.lastName);
    const changeItems = getSymmetricDifference(dataBefore.items, dataAfter.items);
    changeItems.forEach((item) => cy.get(`#${item}`).click());
    cy.get(`#${ID.Form_Registration_Submit}`).click();

    cy.get(`#${ID.Snackbar}`).should(
      'contain',
      `Successfully updated registration for ${dataAfter.firstName} ${dataAfter.lastName}`
    );
    cy.searchRegistration(dataAfter.firstName, dataAfter.lastName);
    cy.checkRegistrationItems(dataAfter.items);

    cy.clearSearch();
  });
}

Cypress.Commands.add('updateRegistration', updateRegistration);

declare global {
  namespace Cypress {
    interface Chainable {
      updateRegistration: typeof updateRegistration;
    }
  }
}

export {};
