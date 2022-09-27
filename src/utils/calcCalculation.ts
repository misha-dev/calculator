import { calcCount } from "./calcCount";
import { calcParser } from "./calcParser";

export const calculation = (expression: string) => {
  try {
    const [numberObjects, signs] = calcParser(expression);
    const evaluation = calcCount(numberObjects, signs);
    return evaluation;
  } catch (error: any) {
    return error.message;
  }
};
