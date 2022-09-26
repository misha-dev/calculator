import { calcCount } from "./calcCount";
import { calcParser } from "./calcParser";

export const calculation = (expression: string) => {
  try {
    const [values, signs] = calcParser(expression);
    const evaluation = calcCount(values, signs);
    return evaluation;
  } catch (error: any) {
    return error.message;
  }
};
