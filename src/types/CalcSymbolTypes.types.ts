export type CalcSymbolType = 'C' | '√' | '%' | '/' | '7' | '8' | '9' | '×' | '4' | '5' | '6' | '-' | '1' | '2' | '3' | '+' | '00' | '0' | ',' | '=';

export type Operation = '×' | '/' | '+' | '-';

export type NumberType = 'simpleNumber' | 'percentageNumber';

export interface INumber {
  typeOfNumber: NumberType;
  value: number;
}

export type NumberArray = Array<INumber>;
