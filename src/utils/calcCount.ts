import { operations } from "../types/calcSymbolType.types";

export const calcCount = (values: Array<number | bigint>, signs: Array<operations>) => {
  function resolveOperation(value1: number | bigint, value2: number | bigint, operation: operations): number {
    let evaluation = 0;
    switch (operation) {
      case "×":
        evaluation = (value1 as number) * (value2 as number);
        break;
      case "/":
        evaluation = (value1 as number) / (value2 as number);
        break;

      case "+":
        evaluation = (value1 as number) + (value2 as number);
        break;

      case "-":
        evaluation = (value1 as number) - (value2 as number);
        break;
    }
    return evaluation;
  }

  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === "×" || signs[i] === "/") {
      let evaluation = resolveOperation(values[i], values[i + 1], signs[i]);
      evaluation = +evaluation.toFixed(5);
      values.splice(i, 2, evaluation);
      signs.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < signs.length; i++) {
    let evaluation = resolveOperation(values[i], values[i + 1], signs[i]);
    values.splice(i, 2, evaluation);
    signs.splice(i, 1);
    i--;
  }

  return values[0];
};
