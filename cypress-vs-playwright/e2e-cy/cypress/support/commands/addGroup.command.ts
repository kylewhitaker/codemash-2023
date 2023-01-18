import { ID, Route } from '../enums';
import { Group } from '../interfaces';

function addGroup(data: Group): Cypress.Chainable<any> {
  return cy.url().then((url) => {
    if (!url.includes(Route.Groups)) cy.visit(Route.Groups);

    const { name } = data;
    cy.get(`#${ID.Page_Groups_Add}`).click();
    cy.get(`#${ID.Form_Group_Name}`).type(name);
    cy.get(`#${ID.Form_Group_Submit}`).click();

    cy.get(`#${ID.Snackbar}`).should('contain', `Successfully created new group ${name}`);
    cy.searchGroup(name);

    cy.clearSearch();
  });
}

Cypress.Commands.add('addGroup', addGroup);

declare global {
  namespace Cypress {
    interface Chainable {
      addGroup: typeof addGroup;
    }
  }
}

export {};
