import { useCallback, useContext } from "react";
import { CalcContext } from "../context/CalcContext";


// hook for managing typed symbols
export const useButtonsClick = () => {
  const { expression, setExpression, answer, setAnswer } = useContext(CalcContext);
  const notSpaceSigns = [",", "√", "%"];
  const onCalcButtonClick = useCallback(
    (calcSymbol: string) => {
      if (answer) {
        setExpression(calcSymbol);
        setAnswer(false);
      } else if (Number.isNaN(Number(calcSymbol)) && !notSpaceSigns.includes(calcSymbol)) {
        setExpression((prevExpression) => prevExpression + " " + calcSymbol + " ");
      } else {
        setExpression((prevExpression) => prevExpression + calcSymbol);
      }
    },
    [answer]
  );

  const onCalcButtonEqualSignClick = useCallback(() => {
    setAnswer(true);
  }, []);
  const onCalcButtonEraseClick = useCallback(() => {
    setExpression("");
    setAnswer(false);
  }, []);

  const onCalcBackspace = useCallback(() => {
    setExpression((prevExpression) => {

      if (prevExpression.at(-1) === " ") {
        return prevExpression.slice(0, -3);
      } else {
        return prevExpression.slice(0, -1);
      }
    });
    setAnswer(false);
  }, [expression]);

  return { onCalcButtonClick, onCalcButtonEqualSignClick, onCalcButtonEraseClick, onCalcBackspace };
};
