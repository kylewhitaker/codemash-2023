import { Group } from '../interfaces';
import { getRandomInt } from '../utils';

export const getGroup = (data: Partial<Group> = {}): Group => {
  return {
    name: `E2E Group ${getRandomInt(6)}`,
    ...data,
  };
};
