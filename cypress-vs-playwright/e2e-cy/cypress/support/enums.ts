export { ID, AccessRole } from '../../../client/src/core/enums';

export enum Action {
  Create = 'create',
  Update = 'update',
  Delete = 'delete',
}

export enum Route {
  Activity = '/activity',
  Login = '/login',
  Groups = '/groups',
  Registrations = '/registrations',
  Users = '/users',
  Individuals = '/individuals',
}

export enum User {
  Admin = 'Kyle Whitaker',
  Registrar = 'E2E Registrar',
}

export enum Emoji {
  Speakers = '🗣️',
  Breakfast = '🍳',
  Lunch = '🥪',
  Dinner = '🍽️',
  Reception = '🥂',
}

export enum RegistrationItem {
  ThursdayReception = 'ThursdayReception',
  FridaySpeakers = 'FridaySpeakers',
  FridayBreakfast = 'FridayBreakfast',
  FridayLunch = 'FridayLunch',
  FridayReception = 'FridayReception',
  FridayDinner = 'FridayDinner',
  SaturdaySpeakers = 'SaturdaySpeakers',
  SaturdayBreakfast = 'SaturdayBreakfast',
  SaturdayLunch = 'SaturdayLunch',
  SaturdayDinner = 'SaturdayDinner',
}

export enum RegistrationDay {
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
}

export const Email = {
  Admin: Cypress.env('ADMIN_EMAIL') as string,
  Registrar: Cypress.env('REGISTRAR_EMAIL') as string,
  GroupLeader: Cypress.env('GROUP_LEADER_EMAIL') as string,
};

export const Password = {
  Admin: Cypress.env('ADMIN_PASSWORD') as string,
  Registrar: Cypress.env('REGISTRAR_PASSWORD') as string,
  GroupLeader: Cypress.env('GROUP_LEADER_PASSWORD') as string,
};
