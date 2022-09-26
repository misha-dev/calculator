export const calcParser = (expression: string): [number[], string[]] => {
  const values: Array<number> = [];
  const symbols: Array<string> = [];
  const appropriateSymbols = ["/", "×", "%", "-", "+"];
  const error = "Wrong expression!";
  expression = expression.trim();
  expression = expression.replace(/,/g, ".");

  const splittedExpression: Array<string> = expression.split(" ");

  splittedExpression.forEach((el) => {
    let shouldSquareRoot = false;
    const squareSigns = [...el.matchAll(/√/g)];

    if (squareSigns.length > 0) {
      if (squareSigns.length > 1) {
        throw new Error(error);
      } else if (el[0] === "√") {
        shouldSquareRoot = true;
      } else {
        throw new Error(error);
      }
    }
    if (shouldSquareRoot) {
      el = el.slice(1);
    }

    if (el.trim() === "") {
      throw new Error(error);
    }

    let floatNumber = Number(el);

    const valueIsNan = Number.isNaN(floatNumber);
    if (!valueIsNan) {
      if (shouldSquareRoot) {
        floatNumber = +Math.sqrt(floatNumber).toFixed(2);
      }
      values.push(floatNumber);
    } else if (appropriateSymbols.includes(el)) {
      symbols.push(el);
    } else {
      throw new Error(error);
    }
  });

  if (values.length - 1 !== symbols.length) {
    throw new Error(error);
  }

  return [values, symbols];
};
