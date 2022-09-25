import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

export const useButtonsClick = (calcSymbol: string) => {
  const { setExpression, answer, setAnswer } = useContext(CalcContext);
  const onCalcButtonClick = () => {
    if (Number.isNaN(Number.parseFloat(calcSymbol)) && calcSymbol !== ",") {
      setExpression((prevExpression) => prevExpression + " " + calcSymbol + " ");
    } else {
      setExpression((prevExpression) => prevExpression + calcSymbol);
    }
    if (answer) {
      setAnswer(false);
    }
  };
  const onCalcButtonEqualSignClick = () => {
    setAnswer(true);
  };
  const onCalcButtonEraseClick = () => {
    setExpression("");
    setAnswer(false);
  };

  return { onCalcButtonClick, onCalcButtonEqualSignClick, onCalcButtonEraseClick };
};
