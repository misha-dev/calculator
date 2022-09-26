import { useCallback, useContext } from "react";
import { CalcContext } from "../context/CalcContext";

export const useButtonsClick = () => {
  const { expression, setExpression, answer, setAnswer } = useContext(CalcContext);
  const onCalcButtonClick = useCallback(
    (calcSymbol: string) => {
      if (answer) {
        setExpression(calcSymbol);
        setAnswer(false);
      } else if (Number.isNaN(Number(calcSymbol)) && calcSymbol !== "," && calcSymbol !== "√") {
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
        return prevExpression.slice(0, -2).trim();
      } else {
        return prevExpression.slice(0, -1).trim();
      }
    });
    setAnswer(false);
  }, [expression]);

  return { onCalcButtonClick, onCalcButtonEqualSignClick, onCalcButtonEraseClick, onCalcBackspace };
};
