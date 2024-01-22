export enum Color {
  red, black, blue, green, yellow, grey
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
