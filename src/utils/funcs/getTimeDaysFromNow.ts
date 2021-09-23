export const getTimeDaysFromNow = (months: number, days: number, years: number): Date => {
  if (months < 0 || months > 11) months = 0;
  if (days < 0 || days > 28) days = 0;
  if (years < 0) years = 0;

  const date = new Date();
  const newMonth = date.getMonth() - months;
  const newDays = date.getDate() - days;
  const newYears = date.getFullYear() - years;

  return new Date(newYears, newMonth, newDays);
};