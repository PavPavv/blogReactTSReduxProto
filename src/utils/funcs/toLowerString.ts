type LowerString = number | string;

export const toLowerString = (str: LowerString): string => {
  return str.toString().toLocaleLowerCase();
};