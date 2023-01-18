import { Emoji, RegistrationItem, Route } from '../enums';

function checkRegistrationItems(items: RegistrationItem[], row: number = 1): Cypress.Chainable<any> {
  return cy.url().then((url) => {
    let Thursday, Friday, Saturday;

    if (url.includes(Route.Registrations)) {
      (Thursday = 5), (Friday = 6), (Saturday = 7);
    } else if (url.includes(Route.Activity)) {
      (Thursday = 9), (Friday = 10), (Saturday = 11);
    } else {
      (Thursday = 5), (Friday = 6), (Saturday = 7);
    }

    cy.get(`tbody tr:nth-child(${row}) td:nth-child(${Thursday})`).should(
      items.includes(RegistrationItem.ThursdayReception) ? 'contain' : 'not.contain',
      Emoji.Reception
    );
    cy.get(`tbody tr:nth-child(${row}) td:nth-child(${Friday})`)
      .should(items.includes(RegistrationItem.FridaySpeakers) ? 'contain' : 'not.contain', Emoji.Speakers)
      .should(items.includes(RegistrationItem.FridayBreakfast) ? 'contain' : 'not.contain', Emoji.Breakfast)
      .should(items.includes(RegistrationItem.FridayLunch) ? 'contain' : 'not.contain', Emoji.Lunch)
      .should(items.includes(RegistrationItem.FridayReception) ? 'contain' : 'not.contain', Emoji.Reception)
      .should(items.includes(RegistrationItem.FridayDinner) ? 'contain' : 'not.contain', Emoji.Dinner);
    cy.get(`tbody tr:nth-child(${row}) td:nth-child(${Saturday})`)
      .should(items.includes(RegistrationItem.SaturdaySpeakers) ? 'contain' : 'not.contain', Emoji.Speakers)
      .should(items.includes(RegistrationItem.SaturdayBreakfast) ? 'contain' : 'not.contain', Emoji.Breakfast)
      .should(items.includes(RegistrationItem.SaturdayLunch) ? 'contain' : 'not.contain', Emoji.Lunch)
      .should(items.includes(RegistrationItem.SaturdayDinner) ? 'contain' : 'not.contain', Emoji.Dinner);
  });
}

Cypress.Commands.add('checkRegistrationItems', checkRegistrationItems);

declare global {
  namespace Cypress {
    interface Chainable {
      checkRegistrationItems: typeof checkRegistrationItems;
    }
  }
}

export {};
