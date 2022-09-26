import { calcCount } from "./calcCount";
import { calcParser } from "./calcParser";

export const calculation = (expression: string) => {
  try {
    const [values, symbols] = calcParser(expression);
    const evaluation = calcCount(values, symbols);
    return evaluation;
  } catch (error: any) {
    return error.message;
  }
};
