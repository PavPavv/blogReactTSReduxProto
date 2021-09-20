export const getDayTimeStr = (): string => {
  const date = new Date();
  const hours = +date.getHours();

  if (hours === 23 || (0 && hours <= 4)) {
    return 'night';
  } else if (hours >= 5 && hours <= 11) {
    return 'morning';
  } else if (hours >= 12 && hours <= 17) {
    return 'afternoon';
  } else if (hours >= 18 && hours <= 22) {
    return 'evening';
  }

  return 'day';

};