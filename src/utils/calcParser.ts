import { INumber, NumberArray, Operation } from "../types/calcSymbolType.types";

export const calcParser = (expression: string): [NumberArray, Operation[]] => {
  const numberObjects: NumberArray = [];
  const signs: Array<Operation> = [];
  const appropriateSigns: Operation[] = ["/", "×", "-", "+"];
  const error = "Wrong expression!";
  expression = expression.trim();
  expression = expression.replace(/,/g, ".");

  const splittedExpression: Array<string> = expression.split(" ");

  function checkSquareRootOrPercents(el: string, type: "squareRoot" | "percents"): [string, boolean] {
    let includesSign = false;

    if (type === "squareRoot") {
      const squareSigns = [...el.matchAll(/√/g)];
      if (squareSigns.length > 0) {
        includesSign = true;

        if (squareSigns.length > 1) {
          throw new Error(error);
        } else if (el[0] === "√") {
          el = el.slice(1);
        } else if (el[el.length - 1] === "√") {
          throw new Error(error);
        } else {
          const splittedExpression = el.split("√");
          const [beforeSquareRoot, afterSquareRoot] = splittedExpression.map((el) => Number(el));

          if (Number.isNaN(beforeSquareRoot) || Number.isNaN(afterSquareRoot)) {
            throw new Error(error);
          }
          el = JSON.stringify((beforeSquareRoot * Math.sqrt(afterSquareRoot)) ** 2);
        }
      }
    } else {
      const squareSigns = [...el.matchAll(/%/g)];
      if (squareSigns.length > 0) {
        includesSign = true;
        if (squareSigns.length > 1) {
          throw new Error(error);
        } else if (el[el.length - 1] === "%") {
          el = el.slice(0, -1);
        } else {
          throw new Error(error);
        }
      }
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

    const numberObject: INumber = { typeOfNumber: "simpleNumber", value: 0 };

    let floatNumber = Number(el);

    const valueIsNan = Number.isNaN(floatNumber);
    if (!valueIsNan) {
      if (hasSquareRoot) {
        floatNumber = +Math.sqrt(floatNumber).toFixed(5);
      }
      if (hasPercents) {
        floatNumber /= 100;
        numberObject.typeOfNumber = "percentageNumber";
      }
      numberObject.value = floatNumber;
      numberObjects.push(numberObject);
    } else if (appropriateSigns.includes(el as Operation)) {
      signs.push(el as Operation);
    } else {
      throw new Error(error);
    }
  });

  if (numberObjects.length - 1 !== signs.length) {
    throw new Error(error);
  }

  return [numberObjects, signs];
};
