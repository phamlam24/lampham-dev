export class Color {
  red: number;
  green: number;
  blue: number;

  public getHex(color: Color): string {
    return `#${((1 << 24) + (color.red << 16) + (color.green << 8) + color.blue)
      .toString(16)
      .slice(1)
      .toUpperCase()}`;
  }
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

