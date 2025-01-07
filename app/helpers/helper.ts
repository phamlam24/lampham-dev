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



