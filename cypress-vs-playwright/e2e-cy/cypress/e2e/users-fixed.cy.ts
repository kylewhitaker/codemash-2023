import { getRandomInt } from '../support/utils';

describe('Users', () => {
  it('Admin create Registrar', () => {
    // Admin logs in
    cy.visit('http://localhost:3000');
    cy.get('#email').type('kylewhitaker51@gmail.com');
    cy.get('#password').type('CodeM@sh23');
    cy.get('#submitAuth').click();

    // Go to Users page
    cy.get('#menu').click();
    cy.get('#menu-users').click();

    // Click "Add new user"
    cy.get('#addUser').click();

    // Fill out form
    const id = getRandomInt(6);
    const lastName = `Registrar${id}`;
    const email = `e2etestdummy+${id}@gmail.com`;
    cy.get('#radio-Registrar').click();
    cy.get('#user-firstName').type('Test');
    cy.get('#user-lastName').type(lastName);
    cy.get('#user-email').type(email);
    cy.get('#submitUser').click();

    // Verify new Registrar user is added
    cy.get('input[placeholder=Search]').type(email);
    cy.get(`tbody tr td[value="Test ${lastName}"]`).should('exist');
  });
});
