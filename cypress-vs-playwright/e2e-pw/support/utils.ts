export const getRandomInt = (length: number): string => {
  let output = '';
  while (length-- > 0) {
    output += Math.floor(Math.random() * 10).toFixed(0);
  }
  return output;
};
