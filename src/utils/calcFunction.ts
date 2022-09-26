export const calcFunction = (expression: string) => {
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
    console.log(el);

    if (squareSigns.length > 0) {
      if (squareSigns.length > 1) {
        return error;
      } else if (el[0] === "√") {
        shouldSquareRoot = true;
      } else {
        return error;
      }
    }
    if (shouldSquareRoot) {
      el = el.slice(1);
      console.log(el);
    }

    let floatNumber = Number(el);

    const valueIsNan = Number.isNaN(floatNumber);
    if (!valueIsNan) {
      if (shouldSquareRoot) {
        floatNumber = Math.sqrt(floatNumber);
      }
      values.push(floatNumber);
    } else if (appropriateSymbols.includes(el)) {
      symbols.push(el);
    } else {
      return error;
    }
  });

  if (values.length - 1 !== symbols.length) {
    return error;
  }

  return values;
};
