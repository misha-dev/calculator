export const calcCount = (values: Array<number>, symbols: Array<string>) => {
  for (let i = 0; i < symbols.length; i++) {
    if (symbols[i] === "×" || symbols[i] === "/" || symbols[i] === "%") {
      let evaluation = 0;
      if (symbols[i] === "×") {
        evaluation = values[i] * values[i + 1];
      } else if (symbols[i] === "/") {
        evaluation = values[i] / values[i + 1];
      } else if (symbols[i] === "%") {
        evaluation = values[i] % values[i + 1];
      }
      evaluation = +evaluation.toFixed(2);
      values.splice(i, 2, evaluation);
      symbols.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < symbols.length; i++) {
    let evaluation = 0;
    if (symbols[i] === "+") {
      evaluation = values[i] + values[i + 1];
    } else {
      evaluation = values[i] - values[i + 1];
    }
    values.splice(i, 2, evaluation);
    symbols.splice(i, 1);
    i--;
  }

  return values[0];
};
