import { RegistrationItem } from '../enums';
import { Registration } from '../interfaces';
import { getRandomInt } from '../utils';

export const getRegistration = (data: Partial<Registration> = {}): Registration => {
  return {
    firstName: 'E2E',
    lastName: `Test${getRandomInt(6)}`,
    items: [RegistrationItem.FridaySpeakers],
    ...data,
  };
};
