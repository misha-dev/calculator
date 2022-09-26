export const calcCount = (values: Array<number>, signs: Array<string>) => {
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === "%") {
      let evaluation = values[i] % values[i + 1];
      evaluation = +evaluation.toFixed(5);
      values.splice(i, 2, evaluation);
      signs.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === "×" || signs[i] === "/") {
      let evaluation = 0;
      if (signs[i] === "×") {
        evaluation = values[i] * values[i + 1];
      } else if (signs[i] === "/") {
        evaluation = values[i] / values[i + 1];
      }
      evaluation = +evaluation.toFixed(5);
      values.splice(i, 2, evaluation);
      signs.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < signs.length; i++) {
    let evaluation = 0;
    if (signs[i] === "+") {
      evaluation = values[i] + values[i + 1];
    } else {
      evaluation = values[i] - values[i + 1];
    }
    values.splice(i, 2, evaluation);
    signs.splice(i, 1);
    i--;
  }

  return values[0];
};
