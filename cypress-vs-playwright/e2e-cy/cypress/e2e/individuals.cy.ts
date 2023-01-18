import { ID } from '../support/enums';

describe('Individuals', () => {
  it('Admin import 3rd party individual registrations', () => {
    cy.login('kylewhitaker51@gmail.com', 'CodeM@sh23');

    cy.get(`#${ID.Menu}`).click();
    cy.get(`#${ID.Menu_Individuals}`).click();

    cy.get(`#${ID.Form_Individuals_File_Input}`).selectFile('cypress/fixtures/individuals.csv');
    cy.get(`#${ID.Form_Individuals_File_Upload}`).click();

    cy.get(`tbody tr td[value="randy.peck@testmail.com"]`).should('exist');
  });
});
