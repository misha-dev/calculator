import { operations } from "../types/calcSymbolType.types";

export const calcParser = (expression: string): [Array<number | bigint>, operations[]] => {
  const values: Array<number> = [];
  const signs: Array<operations> = [];
  const appropriateSigns: operations[] = ["/", "×", "-", "+"];
  const error = "Wrong expression!";
  expression = expression.trim();
  expression = expression.replace(/,/g, ".");

  const splittedExpression: Array<string> = expression.split(" ");

  function checkSquareRootOrPercents(el: string, type: "squareRoot" | "percents"): [string, boolean] {
    let includesSign = false;

    const squareSigns = [...el.matchAll(/√/g)];
    if (squareSigns.length > 0) {
      if (squareSigns.length > 1) {
        throw new Error(error);
      } else if (el[0] === "√") {
        includesSign = true;
      } else {
        throw new Error(error);
      }
    }
    if (includesSign) {
      el = el.slice(1);
    }

    return [el, includesSign];
  }

  splittedExpression.forEach((el) => {
    let hasSquareRoot = false;
    let hasPercents = false;

    [el, hasSquareRoot] = checkSquareRootOrPercents(el, "squareRoot");
    [el, hasPercents] = checkSquareRootOrPercents(el, "percents");

    if (el.trim() === "") {
      throw new Error(error);
    }

    let floatNumber = Number(el);

    const valueIsNan = Number.isNaN(floatNumber);
    if (!valueIsNan) {
      if (hasSquareRoot) {
        floatNumber = +Math.sqrt(floatNumber).toFixed(5);
      }
      values.push(floatNumber);
    } else if (appropriateSigns.includes(el as operations)) {
      signs.push(el as operations);
    } else {
      throw new Error(error);
    }
  });

  if (values.length - 1 !== signs.length) {
    throw new Error(error);
  }

  return [values, signs];
};
