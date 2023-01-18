import { AccessRole, ID, Route } from '../enums';
import { User } from '../interfaces';

function addUser(data: User): Cypress.Chainable<any> {
  return cy.url().then((url) => {
    if (!url.includes(Route.Users)) cy.visit(Route.Users);

    const { accessRole, firstName, lastName, group, email } = data;
    cy.get(`#${ID.Page_Users_Add}`).click();
    const userTypeId =
      accessRole === AccessRole.Registrar ? ID.Form_UserCreate_Registrar : ID.Form_UserCreate_GroupLeader;
    cy.get(`#${userTypeId}`).click();
    if (accessRole === AccessRole.GroupLeader)
      cy.get(`#${ID.Form_UserCreate_Group}`).click().type(group).type('{downarrow}').type('{enter}');
    cy.get(`#${ID.Form_UserCreate_FirstName}`).type(firstName);
    cy.get(`#${ID.Form_UserCreate_LastName}`).type(lastName);
    cy.get(`#${ID.Form_UserCreate_Email}`).type(email);
    cy.get(`#${ID.Form_UserCreate_Submit}`).click();

    cy.get(`#${ID.Snackbar}`).should('contain', `New user invitation sent to ${email}`);
    cy.searchUser(firstName, lastName);
    if (accessRole === AccessRole.GroupLeader) cy.get(`tbody tr:nth-child(1) td:nth-child(4)`).should('contain', group);

    cy.clearSearch();
  });
}

Cypress.Commands.add('addUser', addUser);

declare global {
  namespace Cypress {
    interface Chainable {
      addUser: typeof addUser;
    }
  }
}

export {};
