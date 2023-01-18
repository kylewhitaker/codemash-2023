import { AccessRole } from '../enums';
import { User } from '../interfaces';
import { getRandomInt } from '../utils';

const USER_TYPE: Record<string, string> = {
  [AccessRole.Registrar]: 'Registrar',
  [AccessRole.GroupLeader]: 'GroupLeader',
};

export const getUser = (data: Partial<User> = {}): User => {
  const accessRole = data.accessRole || AccessRole.GroupLeader;
  const lastName = `${USER_TYPE[accessRole]}${getRandomInt(6)}`;
  return {
    accessRole,
    group: `E2E Group ${getRandomInt(6)}`,
    firstName: 'E2E',
    lastName,
    email: `e2etestdummy+${lastName}@gmail.com`,
    ...data,
  };
};
