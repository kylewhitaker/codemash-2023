import { AccessRole, RegistrationItem } from './enums';

export interface Registration {
  firstName: string;
  lastName: string;
  items: RegistrationItem[];
}

export interface User {
  accessRole: AccessRole;
  group: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Group {
  name: string;
}
