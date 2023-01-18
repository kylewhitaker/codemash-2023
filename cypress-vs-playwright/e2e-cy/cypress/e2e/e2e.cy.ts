import { getGroup, getRegistration, getUser } from '../support/data';
import { AccessRole, Action, Email, ID, Password, RegistrationItem, User } from '../support/enums';

describe('E2E', () => {
  it('Registration CRUD + Activity Log', () => {
    cy.login(Email.Registrar, Password.Registrar);
    const dataBefore = getRegistration({ items: [RegistrationItem.FridaySpeakers] });
    cy.addRegistration(dataBefore);
    const dataAfter = { ...dataBefore, items: [RegistrationItem.SaturdaySpeakers] };
    cy.updateRegistration(dataBefore, dataAfter);
    cy.deleteRegistration(dataAfter);
    cy.logout();

    cy.login(Email.Admin, Password.Admin);
    cy.checkActivityLog(User.Registrar, Action.Delete, dataAfter, 1);
    cy.checkActivityLog(User.Registrar, Action.Update, dataAfter, 2);
    cy.checkActivityLog(User.Registrar, Action.Create, dataBefore, 3);
  });

  it('Admin create Group Leader', () => {
    cy.login(Email.Admin, Password.Admin);

    cy.get(`#${ID.Menu}`).click();
    cy.get(`#${ID.Menu_Groups}`).click();
    const groupOneData = getGroup();
    cy.addGroup(groupOneData);
    const groupTwoData = getGroup();
    cy.addGroup(groupTwoData);

    cy.get(`#${ID.Menu}`).click();
    cy.get(`#${ID.Menu_Users}`).click();
    const userData = getUser({ accessRole: AccessRole.GroupLeader, group: groupOneData.name });
    cy.addUser(userData);
    const groupsBefore = [groupOneData];
    const groupsAfter = [...groupsBefore, groupTwoData];
    cy.updateUser(userData, groupsBefore, groupsAfter);
  });
});
