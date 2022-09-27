import { INumber, NumberArray, Operation } from "../types/calcSymbolType.types";

export const calcCount = (numberObjects: NumberArray, signs: Array<Operation>): number => {
  function resolveOperation(numObj1: INumber, numObj2: INumber, operation: Operation): number {
    let evaluation = 0;
    switch (operation) {
      case "×":
        evaluation = numObj1.value * numObj2.value;
        break;
      case "/":
        evaluation = numObj1.value / numObj2.value;
        break;

      case "+":
        if (numObj1.typeOfNumber === "percentageNumber") {
          evaluation = numObj1.value * numObj2.value + numObj2.value;
        } else if (numObj2.typeOfNumber === "percentageNumber") {
          evaluation = numObj1.value + numObj2.value * numObj1.value;
        } else {
          evaluation = numObj1.value + numObj2.value;
        }
        break;

      case "-":
        if (numObj1.typeOfNumber === "percentageNumber") {
          evaluation = numObj1.value * numObj2.value - numObj2.value;
        } else if (numObj2.typeOfNumber === "percentageNumber") {
          evaluation = numObj1.value - numObj2.value * numObj1.value;
        } else {
          evaluation = numObj1.value - numObj2.value;
        }
        break;
    }
    return evaluation;
  }

  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === "×" || signs[i] === "/") {
      let evaluation = resolveOperation(numberObjects[i], numberObjects[i + 1], signs[i]);
      evaluation = +evaluation.toFixed(5);
      numberObjects.splice(i, 2, { typeOfNumber: "simpleNumber", value: evaluation });
      signs.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < signs.length; i++) {
    let evaluation = resolveOperation(numberObjects[i], numberObjects[i + 1], signs[i]);
    numberObjects.splice(i, 2, { typeOfNumber: "simpleNumber", value: evaluation });
    signs.splice(i, 1);
    i--;
  }

  return numberObjects[0].value;
};
