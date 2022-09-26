import { useCallback, useContext } from "react";
import { CalcContext } from "../context/CalcContext";

export const useButtonsClick = () => {
  const { setExpression, answer, setAnswer } = useContext(CalcContext);
  const onCalcButtonClick = useCallback(
    (calcSymbol: string) => {
      if (answer) {
        setExpression(calcSymbol);
        setAnswer(false);
      } else if (Number.isNaN(Number.parseFloat(calcSymbol)) && calcSymbol !== ",") {
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

  return { onCalcButtonClick, onCalcButtonEqualSignClick, onCalcButtonEraseClick };
};
