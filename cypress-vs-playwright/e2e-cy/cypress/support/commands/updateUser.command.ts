import { ID, Route } from '../enums';
import { Group, User } from '../interfaces';

function updateUser(data: User, groupsBefore: Group[], groupsAfter: Group[]): Cypress.Chainable<any> {
  return cy.url().then((url) => {
    if (!url.includes(Route.Users)) cy.visit(Route.Users);

    cy.searchUser(data.firstName, data.lastName);
    cy.get(`#${ID.Action_Edit}`).click();

    cy.wrap(groupsBefore).then((expectedGroups) => {
      cy.get(`[id*=${ID.Form_UserEdit_Groups_Chip}]`)
        .should('have.length', expectedGroups.length)
        .each((actualGroup) =>
          cy.wrap(actualGroup).should((el) => expect(expectedGroups.map((x) => x.name)).to.include(el.text()))
        );
    });

    cy.get(`#${ID.Form_UserEdit_Groups_Input}`).then((el) => {
      cy.wrap(el).click();
      cy.get(`form button[title="Clear"]`).click();
      groupsAfter.forEach((group) => cy.wrap(el).type(group.name).type('{downarrow}').type('{enter}'));
    });

    cy.get(`#${ID.Form_UserEdit_Submit}`).click();

    cy.get(`#${ID.Snackbar}`).should('contain', `Successfully updated groups for ${data.firstName} ${data.lastName}`);

    cy.searchUser(data.firstName, data.lastName);

    cy.wrap(groupsAfter).then((expectedGroups) => {
      cy.get(`[id*=${ID.Table_Users_Groups_Chip}]`)
        .should('have.length', expectedGroups.length)
        .each((actualGroup) =>
          cy.wrap(actualGroup).should((el) => expect(expectedGroups.map((x) => x.name)).to.include(el.text()))
        );
    });

    cy.clearSearch();
  });
}

Cypress.Commands.add('updateUser', updateUser);

declare global {
  namespace Cypress {
    interface Chainable {
      updateUser: typeof updateUser;
    }
  }
}

export {};
