export const getRandomBinary = (length: number): string => {
  let output = '';
  while (length-- > 0) {
    output += Math.random().toFixed();
  }
  return output;
};

export const getRandomInt = (length: number): string => {
  let output = '';
  while (length-- > 0) {
    output += Math.floor(Math.random() * 10).toFixed(0);
  }
  return output;
};

/**
 * Area Code = 000 to 199
 */
export const getRandomPhone = (): string => `${getRandomBinary(1)}${getRandomInt(9)}`;

export function getSymmetricDifference<T>(a: T[], b: T[]): T[] {
  return [...a.filter((x) => !b.includes(x)), ...b.filter((y) => !a.includes(y))];
}
