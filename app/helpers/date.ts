export function getShowDate(date: string | Date): string {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return "Invalid date";
  }

  const options: Intl.DateTimeFormatOptions = {};

  if (parsedDate.getDate() !== 1) {
    options.day = "numeric";
  }
  if (parsedDate.getMonth() !== 0 || options.day) {
    options.month = "long";
  }
  options.year = "numeric";

  return parsedDate.toLocaleDateString("en-US", options);
}

export enum Months {
  JANUARY = 0,
  FEBRUARY = 1,
  MARCH = 2,
  APRIL = 3,
  MAY = 4,
  JUNE = 5,
  JULY = 6,
  AUGUST = 7,
  SEPTEMBER = 8,
  OCTOBER = 9,
  NOVEMBER = 10,
  DECEMBER = 11,
}